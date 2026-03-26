import { useState } from 'react'
import './App.css'
import  Tarefas  from './components/addTarefas'

function App() {


  return (
    <>
    <div>
      <Tarefas nomeTarefa="Estudar React" status="pendente"/>
    </div>
    </>
  )
}

export default App
