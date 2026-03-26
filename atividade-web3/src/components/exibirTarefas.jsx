import ItemTarefa from "./ItemTarefa";

export default function ExibirTarefas({ tarefas }) {
    if (!tarefas || tarefas.length === 0) {
        return <p>Nenhuma tarefa cadastrada.</p>;
    }

    return (
        <ul>
            {tarefas.map((tarefa, index) => (
                <ItemTarefa key={`${tarefa.nomeTarefa}-${index}`} tarefa={tarefa} />
            ))}
        </ul>
    );
}