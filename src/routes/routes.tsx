import DashboardLayout from "@/layout/DashboardLayout"
import Login from "@/pages/auth/Login/Login"
import User from "@/pages/User/User"
import Users from "@/pages/Users/Users"

import { createBrowserRouter, RouteObject } from "react-router-dom"

const ROUTES: RouteObject[] = [
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard/users",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: ":user_id",
        element: <User />,
      },
    ],
  },
]
export default createBrowserRouter(ROUTES)
