import { useState } from 'react'


function App() {
 
  const [color, setColor] = useState("#ffffff")

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return(
    <div className="project">
      <h1>Color picker</h1>
      <label>Select a color:</label>
      <br />
      <input type="color" value={color} onChange={handleColorChange} />
      <br />

      <div className="color-box" style={{backgroundColor: color}}>
        <p className='colorText1'>Selected Color:</p>
        <p className='colorText2'>{color}</p>
      </div>
    </div>
  );

}

export default App
