import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: { CURRENT_LANGUAGE: "The current language is English." },
  it: { CURRENT_LANGUAGE: "La lingua attuale è Italiano." },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return <h1>{Strings[language].CURRENT_LANGUAGE}</h1>;
}
