import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import primeiroComponente from './components/primeiroComponente'

function App() {
  const [count, setCoussnt] = useState(0)

  return (
    <>
      <h1>Home Principal</h1>
      <primeiroComponente/>
    </>
  )
}

export default App