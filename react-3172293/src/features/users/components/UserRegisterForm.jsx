// Componente para registrar un usuario 
import { useState, useEffect } from "react"
import{
    Input,
    Select,
    Checkbox,
    Button,
    FileInput,
    StatusSwitch,
    // IconButton
 } from "@/shared";
 import { getDocumentTypes } from "../../../services/selectServices";
 import { useNavigate} from "react-router-dom"
 import { userSchema} from "../schemas/userSchema"
 import { User  } from "lucide-react";


export  default function UserRegisterForm() {
// Navegacion
    const navigate = useNavigate();
    // Estado del error
    const[errors, setErrors] = useState({})
    
    const[formData, setFormData] = useState({
        userName:"",
        userEmail:"",
        userPhone:"",
        userDocumentTypes:"",
        userDocumentNumber:"",
        userPassword:"",
        userImage: [],

        isStaff: false,
        isActive: true,
        isSuperUser: false,
    })

  // Estado que controla el switch
  const [isActive, setIsActive] = useState(true);

  const handleStatusChange = (value) => {
    setIsActive(value);
  }

    // Handle generico

    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor
        const{name, value, type, checked} = e.target;

        setFormData((prev) => ({
            // Se copian todos los valores anteriores del estado 
            ...prev,

            // S actualiza unicamente lo que cambio

            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle submit
    const handleSubmit = async (e) => {
        // Evita que el formulario recargue la pagina 
        e.preventDefault();

        const result= userSchema.safeParse(formData);


        if(!result.success){

            const fieldErrors = {};

            result.error.issues.forEach((issue) => {

                fieldErrors[issue.path[0]] = issue.message;
            });

            setErrors(fieldErrors);

            // Cortamos la ejecucion:no se envia nada al backend

            return;
        }
        
        // Si la validación es exitosa, se limpian los errores
        setErrors({});

        // Activamos estado de envío
        // setIsSubmitting(true);

        try {
          // LLamamos al servicio frontend para que consume la AÍ
          // result.data contiene los datos ya validados ór zod
          // const response =  await createUser(result.data);

          // Log informativo para desarrollo
          // console.log("usuario creado:", response);

          // Feedback básico al ususario
          alert("Usuario creado correctamente");

          // Navegamos a las vista anterior
          // navigate(-1) equivale a "volver atrás"
          navigate(-1);

        } catch (error) {
          // Capturamos errores de red o errores lanzados por el service
          console.error("Error:", error.message);

          // Mostramos el mensaje de error al usuario
          alert(error.message);
        } finally {
          // Pase lo que pase, desactivamos el estado de envío
          // setIsSubmitting(false);
        }
    }

    // HandleNameChange

    // const handleNameChange = (e) => {
    //   const value = e.target.value.trim();

    //   if (value == "") {
    //     console.log("El nombre no puede estar vacío")
    //   }
       
    // };

 const[documentTypes, setDocumentTypes] = useState([])
 useEffect(() => {
  getDocumentTypes().then(setDocumentTypes);
 },[])


    return(
        <div className=" grid  items-center justify-center ">
          <h1 className="
          mx-auto 
          my-12 
          text-2xl
          font-bold 
          mb-6
          ">Registro de usuario</h1>
          {/* Formulario */}
          <form action=""
          onSubmit={handleSubmit}
          >
            <Input 
            label="Nombre"
            // El name debe tener el mismo nombre que el archivo de userSchemas.js
            name="userName"
            type="text"
            value={formData.userName}
            placeholder="Escribe tu nombre"
            htmlFor="user-name"
            onChange={handleChange}
            error={errors.userName}
          />
          <Input 
            label="Correo"
            name="userEmail"
            type="email"
            value={formData.userEmail}
            placeholder="Escribe tu correo"
            htmlFor="user-email"
              error={errors.userEmail}
              onChange={handleChange}
          />
          <Input 
            label="Telefono"
            name="userPhone"
            type="tel"
            value={formData.userPhone}
            placeholder="Escribe tu telefono"
            htmlFor="user-phone"
              error={errors.userPhone}
              onChange={handleChange}
          />
            <Select 
            label="Tipos de documentos"
            name="userDocumentTypes"
            value={formData.userDocumentType}
            htmlFor="userDocumentTypes"
            options={documentTypes}
              error={errors.userDocumentType}
              onChange={handleChange}
            />
            <Input 
            label="Documento"
            name="userDocumentNumber"
            type="text"
            value={formData.userDocumentNumber}
            placeholder="Escribe tu numero de documento"
            htmlFor="user-document-number"
            error={errors.userDocumentNumber}
            onChange={handleChange}
          />
            <Input 
            label="contraseña"
            name="userPassword"
            type="password"
            value={formData.userPassword}
            placeholder="Escribe tu contraseña"
            htmlFor="user-password"
              error={errors.userPassword}
              onChange={handleChange}
          />

          <div className="p-6 max-w-md space-y-4">
            <StatusSwitch
            checked={isActive}
            onChange={handleStatusChange}
            size="md"
            />
          </div>


          {/* Checkbox */}
          <div className="grid gap-4 my-2 ">

          <Checkbox
          id="isSuperUser"
          name="isSuperUser"
          label="Es super usuario"
          checked={formData.isSuperUser}
          onChange={handleChange}
          />
          <Checkbox
          id="isStaff"
          name="isStaff"
          label="Es staff"
          checked={formData.isStaff}
          onChange={handleChange}
          />

          <Checkbox
          id="isActive"
          name="isActive"
          label="Esta activo"
          checked={formData.isActive}
          onChange={handleChange}
          />

          <FileInput
          value={formData.userImage}
          onChange={(files) =>
            setFormData((prev) => ({ ...prev, userImage: files}))
          }
          multiple={true}
          />
          {errors.userImage && (
            <span className="text-red-500 text-sm">{errors.userImage}</span>
          )}

          </div>
          {/* Actions */}
            <div className="flex gap-6 items-center">
            <Button
            variant="secondary"
            size="sm"
            type="button"
            onClick= {() => navigate(-1)}
            > cancelar
            </Button>
            
            <Button
            variant="primary"
            size="md"
            type="submit"
            onClick= {() => console.log("Boton Guardar")}
            > Guardar
            </Button>
          </div>
          <User />
          </form>
        </div>
    )

}
