import ExibirTarefas from "../components/exibirTarefas";

export default function PaginaExibir({ tarefas }) {
    return (
        <div>
            <h1>Minhas Tarefas</h1>
            <ExibirTarefas tarefas={tarefas} />
        </div>
    );
}
