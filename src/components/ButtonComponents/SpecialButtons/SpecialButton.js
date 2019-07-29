import React from "react";
import "./specialButtons.scss";

export const SpecialButton = ({special, setValues, values}) => {
  const handleSpecial = () => {
    switch (special) {
      case "C":
        setValues("");
        break;
      case "+/-":
        setValues("-" + "(" + values + ")");
        break;
      case "%":
        setValues(values.concat("%"));
        break;
      default:
        console.log("default");

    }

  }

  return (
  
        <button className="specialBTN, button" onClick={handleSpecial}>
        
        {special}
        
        </button>
  
  )
}

