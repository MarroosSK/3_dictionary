import { FormEvent, ReactNode } from "react";

//for context - states/ functions
export interface DictionaryTypes {
  searchWord: string;
  savedWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setSavedWord: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
//for context - children prop
export interface ChildrenProps {
  children: ReactNode;
}

//for fetchData
export interface Licence {
  name: string;
  url: string;
}
export interface Phonetics {
  text: string;
  audio: string;
  sourceUrl: string;
  licence: Licence;
}

export interface Definitions {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meanings {
  partOfSpeech: string;
  definitions: Definitions[];
}


//for fetchData - final
export interface WordType {
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
  licence: Licence;
  sourceUrls: string[];
}[]