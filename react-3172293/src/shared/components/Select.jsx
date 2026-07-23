//Componente select 

export default function Select({
    label,
    error,
    name,
    options = [],
    value,     
    onChange,  
}){

    return(
        <div className="w-[320px]">
            
        {label &&(
            <label 
            className="
            block 
            text-caption
            mb-1
            text-text-secondary
            " 
            >
            {label}
            </label>
        )}
        
        <select 
            name={name} 
            value={value} 
            onChange={onChange} 
            className="
            w-80
            h-12
            rounded-md
            border
            px-4
            hover:border
            hover:border-focus-border
            "
        >
            <option value="">Seleccione una opcion</option>
            {options.map((opt) => (
                <option 
                key={opt.value} 
                value={opt.value}
                >    
                {opt.label}
                </option>
            ))}         
        </select>
        {error && (
            <p className="text-caption text-red-800 place-self-start mt-1">{error}</p>
        )}
        </div>
    )
}