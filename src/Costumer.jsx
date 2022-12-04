import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Costumer() {
  const Strings = {
    en: {
      lang: "this is English",
    },
    ro: { lang: "In romana" },
  };
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1>{Strings[language].lang}</h1>
    </div>
  );
}

export default Costumer;
