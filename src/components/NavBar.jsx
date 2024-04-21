import React, { useContext } from "react";
import { Context } from "../App";

export const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useContext(Context); // Destructuring the context value correctly

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <select name="language" id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="AR">AR</option>
        <option value="FR">FR</option>
      </select>
    </div>
  );
};
