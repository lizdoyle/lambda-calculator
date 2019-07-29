import React from "react";
import  "./numberButtons.scss";

export const NumberButton = props => {
    
  const handeleAddToEquation = () => {
    props.addToEquation(props.number)
  }
    return (
        <button className="numBTN, button" onClick={handeleAddToEquation}>
        
        {props.number}
            
        </button>
  );
};

