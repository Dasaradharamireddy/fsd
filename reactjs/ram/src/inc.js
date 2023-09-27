import React, { useState } from 'react';
function ClickCounter() {
  const [count, setCount] = useState(0);


  const incrementCount = () => {
    if(count<100){
        setCount(count+2);
    }
  };
  const decrementCount = () => {
    if(count>-10){
        setCount(count-2);
    }
  };
  return (
    <div>
      <h1>click here</h1>
      <p>Count= {count}</p>
      <button onClick={incrementCount}>incr</button>


      <button onClick={decrementCount}>decr</button>
    </div>
  );
}
export default ClickCounter