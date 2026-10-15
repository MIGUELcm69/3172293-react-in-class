import Swal from "sweetalert2"

export function showSuccessAlert({
    // Los vaklores despues del = son valores por defecto
    title =  "Exito",
    text = "",
    confirmButtonText = "Aceptar",
    timer = 5000,
}) {
    // Swal.fire() crea el modal 
    return Swal.fire({
        icon: "success",
        title,
        text,
        confirmButtonText,
        timer,
        timerProgressBar: true,
        
        customClass: {
            popup: "rounded-2xl",
            title: "!text-red-600",
            confirmButton: "bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg",
        },
        buttonsStyling: false
    });
}