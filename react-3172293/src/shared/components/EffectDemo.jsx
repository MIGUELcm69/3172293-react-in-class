//EffectDemo.jsx
//Efecto con array vacion o sin dependecnias
//Este efcto se ejcuta una sola vez yesto ocurre cuando el componente se monta por primera vez
import { useEffect, useState } from "react";

export default function EffectDemo(){
    const[message, setMessage] = useState("Cargando...")

    useEffect(() => {

        setTimeout(() => {
            setMessage("Componente cargando")
        },2000)

    },[])

    return <h1>{message}</h1>
}
