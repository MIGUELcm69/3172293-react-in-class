// Hook para manejo de estado local en componentes funcionales
import { useState } from "react";

// Configuración de campos disponibles para el reporte
import { userReportFields } from "../config/userReportFields";

// Caso de uso que orquesta la generación del reporte
import { generateUserReport } from "../services/generateUserReport";

// Componentes UI reutilizables (design system)
import { Button, Input, Select } from "@/shared";
import Checkbox from "@/shared/components/Checkbox";

// Componente modal para configuración de reportes
export default function ReportConfigModal({ isOpen, onClose }) {

  // Estado del formato de salida
  const [format, setFormat] = useState("pdf");

  // Estado del alcance del reporte
  const [scope, setScope] = useState("all");

  // Estado para filtro por documento
  const [documentNumber, setDocumentNumber] = useState("");

  // Estado de campos seleccionados (inicialización lazy)
  const [selectedFields, setSelectedFields] = useState(() =>
    userReportFields.filter((f) => f.default)
  );

  // Control de render: si el modal no está abierto
  if (!isOpen) return null;

  // Handler para activar/desactivar campos del reporte
  const handleFieldToggle = (field) => {

    // Verifica si el campo ya está seleccionado
    const exists = selectedFields.find(
      (f) => f.key === field.key
    );

    if (exists) {

      // Elimina el campo si ya existe
      setSelectedFields(
        selectedFields.filter(
          (f) => f.key !== field.key
        )
      );

    } else {

      // Agrega el campo si no existe
      setSelectedFields([
        ...selectedFields,
        field
      ]);
    }
  };

  // Handler principal para generar el reporte
  const handleGenerateReport = () => {

    // Invoca el caso de uso con la configuración actual
    generateUserReport({
      format,
      selectedFields,
      scope,
      documentNumber
    });

    // Cierra el modal después de generar
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      {/* Contenedor del modal */}
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">

        {/* Título */}
        <h2 className="mb-6 text-xl font-semibold">
          Generar reporte de usuarios
        </h2>

        {/* Selección de formato */}
        <div className="mb-4">
          <Select
            label="Formato del reporte"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            options={[
              { label: "PDF", value: "pdf" },
              { label: "Excel", value: "excel" }
            ]}
          />
        </div>

        {/* Selección de campos */}
        <div className="mb-4">
          <p className="mb-2 font-medium">
            Campos del reporte
          </p>

          {/* Grid de checkboxes */}
          <div className="grid grid-cols-2 gap-2">

            {userReportFields.map((field) => {

              // Determina si el campo está seleccionado
              const checked = selectedFields.some(
                (f) => f.key === field.key
              );

              return (
                <Checkbox
                  key={field.key}
                  id={field.key}
                  name={field.key}
                  label={field.label}
                  checked={checked}
                  onChange={() =>
                    handleFieldToggle(field)
                  }
                />
              );
            })}

          </div>
        </div>

        {/* Selección de alcance */}
        <div className="mb-4">
          <Select
            label="Alcance del reporte"
            value={scope}
            onChange={(e) =>
              setScope(e.target.value)
            }
            options={[
              {
                label: "Todos los usuarios",
                value: "all"
              },
              {
                label: "Filtrar por documento",
                value: "document"
              }
            ]}
          />
        </div>

        {/* Campo condicional */}
        {scope === "document" && (
          <div className="mb-4">
            <Input
              label="Número de documento"
              value={documentNumber}
              onChange={(e) =>
                setDocumentNumber(
                  e.target.value
                )
              }
              placeholder="Ingrese número de documento"
            />
          </div>
        )}

        {/* Acciones */}
        <div className="flex justify-end gap-2 mt-6">

          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancelar
          </Button>

          <Button
            variant="primary"
            onClick={handleGenerateReport}
          >
            Generar reporte
          </Button>

        </div>
      </div>
    </div>
  );
}