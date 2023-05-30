import { createContext, FormEvent, useState } from "react";
import { ChildrenProps, DictionaryTypes } from "../types/types";


export const DictionaryContext = createContext<null | DictionaryTypes>(null);


export const DictionaryContextProvider = ({ children }: ChildrenProps) => {
  const [searchWord, setSearchWord] = useState("");
  const [savedWord, setSavedWord] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSavedWord(searchWord);
  };

  const contextValue: DictionaryTypes = {
    searchWord,
    setSearchWord,
    savedWord,
    setSavedWord,
    handleSubmit,
  };

  return (
    <DictionaryContext.Provider value={contextValue}>
      {children}
    </DictionaryContext.Provider>
  );
};
