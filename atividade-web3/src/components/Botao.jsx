export default function Botao({ type = "button", children, onClick }) {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
}
