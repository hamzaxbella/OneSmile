import React, { useContext } from "react";
import { Context } from "../App";
import { HeroContent } from "../constants";

export const HeroSection = () => {
  const [selectedLanguage] = useContext(Context); // Accessing selectedLanguage from the context
  const content = selectedLanguage === "FR" ? HeroContent.FR[0] : HeroContent.AR[0];  
  console.log(content.Title)
  return (
    <div >{content.Title}</div>
  );
};
