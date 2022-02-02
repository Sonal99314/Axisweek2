import React from 'react';

function Greet() {
    function clickHandler(){
        console.log("button click")
    }
  return <div>
      <button onClick={clickHandler}>CLICK</button>    
  </div>;
}

export default Greet;

