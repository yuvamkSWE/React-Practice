import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  function handleIncrease(){
    setCount( c => c + 1);
  }
  function handleDecrease(){
    setCount( c => c - 1);
    }

  function handleReset(){
    setCount(0);
  }

  return(

    <div className="project">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset} >Reset</button>
    </div>


  );

  
}

export default App
