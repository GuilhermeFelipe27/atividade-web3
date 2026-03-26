export default function ItemTarefa({ tarefa }) {
    return (
        <li>
            <strong>{tarefa.nomeTarefa}</strong> - {tarefa.status}
        </li>
    );
}
