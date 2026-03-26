export default function PaginaEstatisticas({ tarefas }) {
    const totalTarefas = tarefas.length;
    const tarefasConcluidas = tarefas.filter((t) => t.status === "concluido").length;
    const tarefasPendentes = tarefas.filter((t) => t.status === "pendente").length;
    const percentualConcluido = totalTarefas > 0 ? ((tarefasConcluidas / totalTarefas) * 100).toFixed(2) : 0;

    return (
        <div>
            <h1>Estatísticas das Tarefas</h1>
            <div style={{ marginTop: "20px" }}>
                <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
                    <h3>Total de Tarefas: {totalTarefas}</h3>
                </div>
                <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "#d4edda", borderRadius: "5px" }}>
                    <h3>Tarefas Concluídas: {tarefasConcluidas}</h3>
                </div>
                <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "#fff3cd", borderRadius: "5px" }}>
                    <h3>Tarefas Pendentes: {tarefasPendentes}</h3>
                </div>
                <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "#cce5ff", borderRadius: "5px" }}>
                    <h3>Percentual Concluído: {percentualConcluido}%</h3>
                </div>
            </div>
        </div>
    );
}
