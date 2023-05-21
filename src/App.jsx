import { useState } from 'react'
import './App.css'
import Mainmodule from './components/Mainmodule/Mainmodule'
import Modele from './components/Modele/Modele'
import Answer from './components/Answer/Answer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Mainmodule></Mainmodule>
      <Modele></Modele>
      <Answer></Answer>
      
      
    </div>
      

  )
}

export default App
