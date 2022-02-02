import React from 'react';

function child(props) {
  return <div>
      <button onClick={props.greetHandler}>Greet parent</button>
  </div>;
}

export default child;
