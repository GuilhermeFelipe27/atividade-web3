import { Link } from "react-router-dom";

export default function Navegacao() {
    return (
        <nav style={{ marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
            <Link to="/" style={{ marginRight: "20px" }}>Adicionar Tarefa</Link>
            <Link to="/tarefas">Ver Tarefas</Link>
        </nav>
    );
}
