import React, {useState} from 'react';

const Counter=()=>{
  const [count, setCount]=useState(0);
  const increment=()=>{
    setCount((previousCount) => previousCount + 1);
  }

  return(
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={increment}>Увеличить на 1</button>
    </div>
  )
}

export default Counter