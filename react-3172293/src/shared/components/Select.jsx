//Componente select 

export default function Select({
    label,
    htmlFor,
    name,
    options = [],
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
            id="htmlFor"
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
                <option key={opt.id} value={opt.id}>
                    {opt.label}
                </option>
            ))}         
          </select>
        </div>
    )
}