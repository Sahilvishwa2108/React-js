import { useState } from 'react'
import './App.css'
import Card from './components/Card';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input type="text" className='rounded-xl bg-white text-center' />
      <Card></Card>     
    </>
  )
}

export default App
