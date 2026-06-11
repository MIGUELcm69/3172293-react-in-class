export default function Checkbox({
    id, // Identificador único
    name, // Nombre del campo
    label, // Texto asociado al checkbox
    checked = false, // Estado controlado del checkbox
    onChange, 
    disabled = false,
    className = "",
}) {
    return (
        <label
            htmlFor={id}
            className={`
                flex items-center gap-2
                text-sm
                cursor-pointer
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${className}
            `}
        >
            {/* Input del checkbox */}
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                className="w-5 h-5"
            />

            {/* Texto del checkbox */}
            <span>{label}</span>
            
        </label> 
    );
}