import{ Pencil, Trash2 } from "lucide-react";
import {useNavigate } from "react-router-dom"

export default function UserRowActions({ user}) {

// const handleEdit = () => {
//     console.log("Editar Usuario", user.id)
// };

// Hook que permite redirigir a oytra ruta desde codigo
const navigate = useNavigate();

// Accion para editar al usuario 
// Redirige la pagina de edicion usando el id del usuario 
const handleEdit = () => {
    navigate(`/users/${user.id}/edit`);
};

// Accion para eliminar al usuario 
// Actualmente solo imprime el id 
// En una aplicaccion real asi se llamara a la API
const handeDelete = () => {
    console.log("Eliminar usuario", user.id);
};

return( 
    // Contenedor de los botones de acciones 
    <div className="flex gap-2">


        <button 
            onClick={handleEdit}
            className="p-1 rounded hover:bg-gray-100"
        >
            <Pencil size={16} />
        </button>


        <button
            onClick={handeDelete}
            className="p-1 rounded hover:bg-gray-100"
        >
            <Trash2 size={16} />
        </button>

    </div>
)
} 