import { useState } from 'react'


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [netWorth, setNetWorth] = useState(0);

  return(
    <div className="form">
      <h1>Net Worth Form</h1>
      <form>
      
        <label>First Name:</label>
        <br />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <label>Last Name:</label>
        <br />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        <label>Email:</label>
        <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Net Worth in USD:</label>
        <br />
        <input type="number" value={netWorth} onChange={(e) => setNetWorth(e.target.value)} />


      </form>

      <br /> 


      <h3>Final Info Check</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Net Worth: {netWorth}</p>


      <br />

      <button onClick={
        () => {
          alert(`Hello, ${firstName} ${lastName}! Your net worth is: ${netWorth}.`)
        }

      
      }>Submit</button>
    </div>
  );

}

export default App
