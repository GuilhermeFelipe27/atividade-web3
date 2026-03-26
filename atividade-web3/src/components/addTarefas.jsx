import { useState } from "react";

export default function Tarefas({ nomeTarefa = "", status = " ", }) {

    const [dadosTarefa, setDadosTarefa] = useState({nomeTarefa, status});

    function handleSubmit(){
        e.preventDefault();
        console.log(dadosTarefa)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Digite a tarefa: </label>
                <input type="text" 
                id="nome"
                value={dadosTarefa.nomeTarefa} 
                onChange={(t) => setDadosTarefa({ ...dadosTarefa, nomeTarefa: t.target.value })} 
                />

                <p>Digite o status da tarefa:</p>

                <input type="radio" 
                id="concluido" 
                name="status" 
                value="concluido" 
                checked={dadosTarefa.status === "concluido"}
                onChange={(t) => setDadosTarefa({...dadosTarefa, status: t.target.value})}
                />
                <label htmlFor="concluido">Concluído</label>

                <input type="radio" 
                id="pendente" 
                name="status" 
                value="pendente" 
                checked={dadosTarefa.status === "pendente"}
                onChange={(t) => setDadosTarefa({...dadosTarefa, status: t.target.value})} 
                />
                <label htmlFor="pendente">Pendente</label>
                 
                 <br/>

                <button type="submit">Registrar tarefa</button>
            </form>
        </div>

    )
}