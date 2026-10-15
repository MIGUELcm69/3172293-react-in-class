// src/app/router.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/shared";
import  UserListPage  from "../features/users/pages/UserListPage";
import { UserRegisterForm } from "../features/users";
import { Login } from "../features/auth";
import HomePage from "../features/home/page/HomePage";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/auth",
//     element: <AuthLayout />,
//     children:[
//           { 
//             index: true,
//           }
//         ],
//   },
//   {
//     path: "/dashboard",
//     element: <DashboardLayout/>,
//     children: [
//       { index: true,},
//       // { path: "/dashboard/auth", element: <h1>Hello2</h1>  },
//       { path: "userList", element: <UserListPage/>},
//       { path: "HomePage", element: <HomePage />},
//       { path: "Login", element: <Login />},
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <UserListPage /> },
      { path: "users", element: <UserListPage /> },
      { path: "createuser", element: <UserRegisterForm /> },
    ],
  },
]);

export default router;