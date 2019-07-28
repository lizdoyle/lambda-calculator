import React from "react";

const NumberButton = ({num}) => {
  // console.log(num);
  return (
    <>
      {
        <button>{num}</button>
        
        /* Display a button element rendering the data being passed down from the parent container on props */
        }
    </>
  )
}

export default NumberButton