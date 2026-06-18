//Componente select 

export default function Select({
    label,
    error,
    htmlFor,
    name,
    options = [],
    value,     
    onChange,  
}){

    return(
        <div>
            {/* Label solo se muestra si es truthy en uno logico */}
        {label &&(
            <label 
            htmlFor={htmlFor}
            className="
            block 
            text-caption
            text-text-secondary
            " 
            >
              {label}
            </label>
        )}
        
          <select 
            name={name} 
            id={htmlFor}
            value={value} 
            onChange={onChange} 
            className="
            w-80
            h-12
            rounded-md
            border
            px-4
            hover:border
            hover:border-2
            hover:border-focus-border
            "
        >

            <option value="">Seleccione una opcion</option>

            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
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