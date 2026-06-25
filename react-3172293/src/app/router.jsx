// src/app/router.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/shared";
import  UserListPage  from "../features/users/pages/UserListPage";
import { UserRegisterForm } from "../features/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children:[
          { 
            index: true,
          }
        ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      { index: true, element: <UserRegisterForm /> },
      // { path: "/dashboard/auth", element: <h1>Hello2</h1>  },
      { path: "/dashboard/userList", element: <UserListPage/>},
    ],
  },
]);

export default router;