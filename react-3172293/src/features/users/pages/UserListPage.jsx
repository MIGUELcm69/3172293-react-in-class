import { DataTable } from "@/shared"
import { UserColumns } from "../table/UserColumns"
import {users} from "../data/users"
import{ Button } from "@/shared";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReportConfigModal from "../reports/components/ReportConfigModal"

export default function UserListPage(){
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

    return(
    <div className="p-6">

        <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold ">Listado de Usuarios</h1>
            <div className="flex gap-12">

                    <Button
                        variant="primary"
                        size="sm"
                        type="button"
                        onClick={() => setIsReportModalOpen(true)}
                    > 
                        Reportar usuario
                    </Button>
                <Link to="/dashboard/createUser" className="block ">
                    <Button
                        variant="primary"
                        size="sm"
                        type="button"
                    > 
                        Crear usuarios
                    </Button>
                </Link>
            </div>
        </div>

        <DataTable data={users} columns={UserColumns}/>
        <ReportConfigModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
    />
    </div>
    );
}

