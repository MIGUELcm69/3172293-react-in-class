import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png"; 
import { Input } from "@/shared"; 
import { Button } from "@/shared"; 
import DeleteCounter2 from "../components/DeleteCounter2";
import EffectDemo from "../components/EffectDemo";

export default function AuthLayout(){
  return (
    <>
      <div 
        className="min-h-screen w-full"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="mx-auto">
        {/* Envolvemos el input en un div con ancho controlado */}
          <Input 
            label="Nombre"
            type="text"
            placeholder="Escribe tu nombre"
            htmlFor="name"
            variant="primary"
            size="lg"
          />
          <Input 
            label="Correo"
            type="email"
            placeholder="Escribe tu correo"
            htmlFor="user-email"
          />
          <Input 
            label="Telefono"
            type="tel"
            placeholder="Escribe tu telefono"
            htmlFor="user-phone"
          />
          <Input 
            label="Borar tipo de documento"
            type="text"
            placeholder="Escribe tu telefono"
            htmlFor="name"
          />
          <Input 
            label="Documento"
            type="text"
            placeholder="Escribe tu numero de documento"
            htmlFor="user-document-number"
          />

          {/* Actions */}
          <div className="flex gap-6 items-center">
           <Button
            variant="secondary"
            size="sm"
            type="button"
            onClick= {() => console.log("Boton presionado")}
            > cancelar
            </Button>
            
            <Button
            variant="primary"
            size="md"
            type="button"
            onClick= {() => console.log("Boton presionado")}
            > Guardar
            </Button>
          </div>{/*Actions*/ }

          {/* Imprementacion del estado de useState */}
          <div>
            <h1>Ejemplo sin useState</h1>
            <DeleteCounter2/>
          </div>
          {/* Imprementacion del estado de useState */}
          <div>
            <h1>Ejemplo sin useState</h1>
            <EffectDemo/>
          </div>

          <Outlet/>
        </main>
      </div>
    </>
  );
}