import { useState } from 'react'
import './App.css'
import  Tarefas  from './components/addTarefas'
import ExibirTarefas from './components/exibirTarefas'

function App() {
  const [tarefas, setTarefas] = useState([])

  function handleAdicionarTarefa(novaTarefa) {
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa])
  }


  return (
    <>
    <div>
      <Tarefas onAdicionarTarefa={handleAdicionarTarefa} />
      <ExibirTarefas tarefas={tarefas} />
    </div>
    </>
  )
}

export default App
