//Componente button
// Los componentes siempre se exportan y empienzan en mayusculas

// Le aplicamos las variantes de estilos a nuestro componente
export default function Button({
    variant= "primary",
    size= "md",
    type= "button",
    // Aqui los hijos que va a tener
    children,
    ...props
}){
    const variants = {
        primary: "bg-brand text-text-inverse hover:bg-brand-hover",
        secondary: "border border-[var(--color-secondary-500)] bg-[var(--color-secondary-50)]  text[var(--color-secondary-700)] hover:bg-[var(--color-secondary-100)]", 
       };

const sizes = {
    sm:`
    h-8
    px-4
    before:absolute before:content-[''] 
    before:-inset-y-[8px] before:-inset-x-[0px] 
    `,
    md:`
    h-10
    px-4
    before:absolute before:content-[''] 
    before:-inset-y-[4px] before:-insent-x-[0px] 
    `,
}
    return(
        <button
        type={type}
        className={`
            relative
            inline-flex items-center justify-center
            rounded-md
            transition-colors
            before:content-['']
            ${variants[variant]}
            ${sizes[size]}
            `}
            {...props}
            >

            {children}
        
        </button>
    )
}