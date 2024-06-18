import { jsx as _jsx } from "react/jsx-runtime";
import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/modules/auth/Login/Login";
import User from "@/modules/dashboard/Users/partials/User";
import Users from "@/modules/dashboard/Users/Users";
import { createBrowserRouter } from "react-router-dom";
var ROUTES = [
    { path: "/", element: _jsx(Login, {}) },
    { path: "/login", element: _jsx(Login, {}) },
    {
        path: "/dashboard/users",
        element: _jsx(DashboardLayout, {}),
        children: [
            {
                index: true,
                element: _jsx(Users, {}),
            },
            {
                path: ":user_id",
                element: _jsx(User, {}),
            },
        ],
    },
];
export default createBrowserRouter(ROUTES);
