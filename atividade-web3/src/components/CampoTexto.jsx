export default function CampoTexto({ id, label, value, onChange, placeholder = "" }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
}
