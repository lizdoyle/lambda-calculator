import React, {useState} from "react";

//import any components needed

import  { SpecialButton } from "./SpecialButton";


//Import your array data to from the provided data file

import { specials } from "../../../data.js";




export const Specials = props => {
  // STEP 2 - add the imported data to state

  const [specialState, setSpecialState] = useState(specials);


  return (
    <div>
       
       {specialState.map(special => {

        return (
        <SpecialButton
           special = {special} 
           addToEquation= {props.addToEquation}
           setValues= {props.setValues}
           setResult= {props.setResult}
           values= {props.values}
           />

        )
        })
      }
    </div>
  );
}

