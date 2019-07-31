import React, {useState} from "react";

//import any components needed
import { NumberButton } from "./NumberButton";


//Import your array data to from the provided data file

import { numbers } from "../../../data";





export const Numbers = props => {
  // STEP 2 - add the imported data to state
// console.log("Numbers.js: Numbers: props:", props);
const [numberState, setNumberState] = useState(numbers);

const renderButton  = number => {
  return  <NumberButton number = {number}  addToEquation={props.addToEquation}  />
}

  return (
    <div className="numbersContainer">
    
      {numberState.map(renderButton )}
    
    </div>
  )
}

