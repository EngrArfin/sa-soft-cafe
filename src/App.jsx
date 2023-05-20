import { useState } from 'react'
import './App.css'
import Mainmodule from './components/Mainmodule/Mainmodule'
import Modele from './components/Modele/Modele'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Mainmodule></Mainmodule>
      <Modele></Modele>
      
      
    </div>
      

  )
}

export default App
