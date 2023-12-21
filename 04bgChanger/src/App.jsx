import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")
  return (
      <div className="w-full h-screen duration-200 flex justify-center" style={{backgroundColor: color}}>
        <div className="bg-white rounded-full flex justify-center items-center fixed bottom-24 px-4 py-2">
          <button onClick={()=>setColor("red")} className='mx-4 px-4 py-2 rounded-full outline-none shadow-lg' style={{backgroundColor : "red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='mx-4 px-4 py-2 rounded-full outline-none shadow-lg' style={{backgroundColor : "green"}}>Green</button>
          <button onClick={()=>setColor("yellow")} className='mx-4 px-4 py-2 rounded-full outline-none shadow-lg' style={{backgroundColor : "yellow"}}>Yellow</button>
          <button onClick={()=>setColor("blue")} className='mx-4 px-4 py-2 rounded-full outline-none shadow-lg' style={{backgroundColor : "blue"}}>Blue</button>
        </div>
      </div>
  )
}
export default App
