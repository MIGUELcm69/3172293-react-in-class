// URL base del ednpoint de usuarios del backend en desarollo apunta al servidor epress local en produccion deberia prevenir las variables de entorno
// const API_URL = "http://localhost:4000/api/users";

// Funcion para crear un usuario en el backend recibe un objeto con los datos del usuario y retorna la respuesta JSON del servidor 
import { API_URL } from "@/features/config";

const USERS_URL = `${API_URL}/users`

export async function createUser(userData){
// Realizamos la peticion HTTP usando fetch
const response = await fetch(USERS_URL,{
    // Metodo http segun conveccon rest 
    method:"POST",

    // Cabecerass de a peticion
    // indicamos que enviamos JSON 
    headers: {
        "content-Type": "application/json",
    },

    // Convertimos el objeto userData a JSON 
    body: JSON.stringify(userData),
});

// Verificamos si la respuesta No fue exitosa 
if(!response.ok) {
    // Leemos el cuerpo de la respuesta del error 
    const error = await response.json();

    // Lnzamos una excepcion con el mensaje del eror 
    // Esto permite que el componente que llama manejo del error con try 
    throw new Error(error.error || "Errror al creaar un usuario");
}

// si la peticion fue exitosa, retornamos la respuesta parrseada acomo JSON 
return response.json();

}