import React from "react";

import  "./operatorButtons.scss"


export const OperatorButton = props => {
  const handleAddToEquation = () => {
    props.addToEquation(props.operator.value)
  }

  const handleOperator = () => {
    if (props.operator.value === "=") {
      props.calculate();
      
    }
    else {
       handleAddToEquation();
    }
  }

  return (
    
    <button onClick={handleOperator} className="operatorBTN, button">
    
    {props.operator.char}
    
    </button>
           
  )
}

