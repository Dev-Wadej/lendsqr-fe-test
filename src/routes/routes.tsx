import DashboardLayout from "@/layout/DashboardLayout"
import Login from "@/modules/auth/Login/Login"
import User from "@/modules/dashboard/Users/partials/User"
import Users from "@/modules/dashboard/Users/Users"
import React from "react"
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
