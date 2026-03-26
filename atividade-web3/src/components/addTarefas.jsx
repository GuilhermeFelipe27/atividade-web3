import { useState } from "react";
import CampoTexto from "./CampoTexto";
import GrupoRadio from "./GrupoRadio";
import Botao from "./Botao";

export default function Tarefas({ nomeTarefa = "", status = "", onAdicionarTarefa }) {

    const [dadosTarefa, setDadosTarefa] = useState({ nomeTarefa, status });

    function handleSubmit(e) {
        e.preventDefault(); // impede que a página recarregue ao enviar o formulário

        if (!dadosTarefa.nomeTarefa.trim()) { // método trim() remove espaços em branco
            return; // se tiver espaços em branco, o return faz com que a função pare aqui
        }

        onAdicionarTarefa?.({ // o ?. verifica se variável é diferente de null ou undefined
            nomeTarefa: dadosTarefa.nomeTarefa.trim(),
            status: dadosTarefa.status || "pendente",
        });

        setDadosTarefa({ nomeTarefa: "", status: "" });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CampoTexto
                    id="nome"
                    label="Digite a tarefa: "
                    value={dadosTarefa.nomeTarefa}
                    onChange={(t) => setDadosTarefa({ ...dadosTarefa, nomeTarefa: t.target.value })}
                />

                <GrupoRadio
                    titulo="Digite o status da tarefa:"
                    name="status"
                    valorSelecionado={dadosTarefa.status}
                    onChange={(t) => setDadosTarefa({ ...dadosTarefa, status: t.target.value })}
                    opcoes={[
                        { id: "concluido", value: "concluido", label: "Concluído" },
                        { id: "pendente", value: "pendente", label: "Pendente" },
                    ]}
                />
                 
                 <br/>

                <Botao type="submit">Registrar tarefa</Botao>
            </form>
        </div>

    )
}