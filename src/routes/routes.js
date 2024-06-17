import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/modules/auth/Login/Login";
import User from "@/modules/dashboard/Users/partials/User";
import Users from "@/modules/dashboard/Users/Users";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
var ROUTES = [
    { path: "/", element: React.createElement(Login, null) },
    { path: "/login", element: React.createElement(Login, null) },
    {
        path: "/dashboard/users",
        element: React.createElement(DashboardLayout, null),
        children: [
            {
                index: true,
                element: React.createElement(Users, null),
            },
            {
                path: ":user_id",
                element: React.createElement(User, null),
            },
        ],
    },
];
export default createBrowserRouter(ROUTES);
