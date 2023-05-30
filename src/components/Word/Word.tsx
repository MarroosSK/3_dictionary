import { useContext } from "react"
import { DictionaryContext } from "../../context/dictionaryContext"
import { useQuery } from "react-query"
import axios from "axios"
import { Definitions, Meanings, Phonetics, WordType } from "../../types/types"
import { ListGroup, Spinner } from "react-bootstrap"

const Word = () => {
    //context
    const contextValue = useContext(DictionaryContext)
    const searchedWord = contextValue?.savedWord
    //react-query
    const {isLoading, error, data} = useQuery(["words", searchedWord], async () =>{
        const response = await axios.get<WordType[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
        return response.data[0]
    })

    if(!searchedWord) return <div className="vh-100 d-flex justify-content-center align-items-center">Search your word</div>
    if(isLoading) return (<div className="vh-100 d-flex justify-content-center align-items-center gap-2">
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      Loading...
      </div>)
    if(error) return <div className="vh-100 d-flex justify-content-center align-items-center">Error has occured. Please try again.</div>

  return (
    <div>
        <h4 className="mt-4 text-secondary">{data?.word}</h4>
        <div>
            {
                data?.phonetics.slice(0, 1).map((phonetic: Phonetics, index: number) => (
                    <span key={index}>{phonetic.text}</span>
                ))
            }
        </div>

        {data?.meanings.map((meaning: Meanings) => (
          <div key={meaning.partOfSpeech} className="mt-4">
            <h6 className="text-secondary">
              {meaning.partOfSpeech}
            </h6>

            {meaning.definitions?.slice(0, 2).map(({ definition }: Definitions) => (
                <ListGroup variant="flush" key={definition}>
                  <ListGroup.Item className="border-bottom"> {definition}</ListGroup.Item>
                </ListGroup>
            ))}
          </div>
        ))}

        {data?.sourceUrls.slice(0, 1).map((sourceUrl: string, index: number) => (
          <div key={index} className="mt-4">
            <a className="text-secondary" href={sourceUrl}>
              See more ({data?.word})
            </a>
          </div>
        ))}
    </div>
  )
}

export default Word