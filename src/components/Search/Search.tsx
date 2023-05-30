import { ChangeEvent, useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { DictionaryContext } from "../../context/dictionaryContext";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const contextValue = useContext(DictionaryContext);

  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between mt-3 border-bottom">
      <h5 className="fs-1 text-secondary">Dictionary</h5>
      <Form onSubmit={contextValue?.handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search word..."
            value={contextValue?.searchWord}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              contextValue?.setSearchWord(e.target.value)
            }
          />
          <Button type="submit" variant="outline-secondary">
            <BsSearch />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Search;
