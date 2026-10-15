import { useNavigate } from "react-router-dom"
const navigate = useNavigate();

import { createUser } from 
"../services/userService";

const [isSubmitting, setIsSubmitting] = 
useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    // Validamos los datos del formulario contra el esquema zod safeparse No lanza exepcion retorna un objeto controlado 
    const result = userSchema.safeParse(formData);

    // Verioficar en consola si el esquema esta funcionando correctamente 
    console.log(result);

    // Si la validacion falla 
    if(!result.suceess) {
        const fieldErrors = {};

        // RRecorremos cada error generado por ZOD 
        result.error.issues.forEach((issue) => {
            // issue.paht[0] corresponde al nnombre del campo
            // issue.message contiene el mensja e del error definido en el schema 
            fieldErros[issue.path[0]] = issue.message;
        });

    // Actualizamos el estado de error para mostrarlo en la UI
    setErrors(fieldErrors);

    // Cortamos la ejecucion: No se envia nada al backend
    return; 
    }
    // Si la validacion pasa, limpiamos errores previos
    setErros({});

    // Activamos estado de envio util para deshabilitar el boton 
    setIsSubmitting(true);

    try{
        // Llamamos al ervicio frontend que consume la API
        // result.data contiene los datos ya validados por zod 
        const response = await createUser(result.data);

        // Log infromado para desarollo
        console.log("Usuario creado:", response );

        // Feedback basico al usuario 
        alert("Usuario creado correctamente ")

        // Navegamos a la vista anterioir 
        // Navigate(-1) equivale a "volver a atras"
        navigate(-1);
    } catch (error){
        // Capturamos  erorres de res o errores lanzados o rel service 
        console.error("Error:", error.message);

        // Mostramos el mensaje de error al usuario 
        alert(error.message);
    } finally {
        // Pse lo que pase desactivamos el estado de envio 
        setIsSubmitting(false);
    }
};