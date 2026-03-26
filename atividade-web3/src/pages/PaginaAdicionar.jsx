import Tarefas from "../components/addTarefas";

export default function PaginaAdicionar({ onAdicionarTarefa }) {
    return (
        <div>
            <h1>Adicionar Tarefa</h1>
            <Tarefas onAdicionarTarefa={onAdicionarTarefa} />
        </div>
    );
}
