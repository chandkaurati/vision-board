import { useEffect, useState } from 'react'
import authservice from './appwrite/authservice'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    ;(async ()=>{
     authservice.registerUser()
    })()
  })
  return (
   <>
   
   </>
  )
}

export default App
