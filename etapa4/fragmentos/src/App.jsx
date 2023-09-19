import './App.css'
import Fragmentos from './components/Fragmentos'

function App() {
  return (
    <main>
      <h1>Pagina Principal do App</h1>
      <div>
        <Fragmentos marca="FIAT" km={1000} modelo="FastBack" usado={true} />
      </div>
    </main>
  )
}

export default App
