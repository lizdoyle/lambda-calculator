import React, {useState} from "react";
//import any components needed

import { OperatorButton } from "./OperatorButton";


//Import your array data to from the provided data file

import { operators } from "../../../data";



export const Operators = props => {
  // STEP 2 - add the imported data to state

  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div>
       
       {operatorState.map(operator => {

        return  (
        <OperatorButton 
          operator = {operator} 
          addToEquation={props.addToEquation}
          setValues={props.setValues}
          values={props.values}
          calculate={props.calculate}
        />
        )
        })}
      
    </div>
  )
}

