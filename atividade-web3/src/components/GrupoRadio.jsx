export default function GrupoRadio({ titulo, name, opcoes, valorSelecionado, onChange }) {
    return (
        <>
            <p>{titulo}</p>

            {opcoes.map((opcao) => (
                <span key={opcao.value}>
                    <input
                        type="radio"
                        id={opcao.id}
                        name={name}
                        value={opcao.value}
                        checked={valorSelecionado === opcao.value}
                        onChange={onChange}
                    />
                    <label htmlFor={opcao.id}>{opcao.label}</label>
                </span>
            ))}
        </>
    );
}
