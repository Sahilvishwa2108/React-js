import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(15);
  let addValue = () => {
    setCounter(Counter++);
  }
  let removeValue = () => {
    if(Counter > 0){
      setCounter(Counter--);
    }
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <br />
      <h2>{Counter}</h2>
      <br />
      <button onclick = {addValue}>Add value {Counter}</button>
      <button onclick = {removeValue}>Remove value {Counter}</button>
    </>
  )
}

export default App
