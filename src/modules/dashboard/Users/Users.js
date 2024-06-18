import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import users from "@/assets/svgs/users.svg";
import activeUsers from "@/assets/svgs/activeusers.svg";
import usersWithLoan from "@/assets/svgs/userswithloan.svg";
import usersWithSavings from "@/assets/svgs/userswithsavings.svg";
// import dropDown from "@/assets/svgs/dropdown.svg"
import "./users.scss";
import UserDashboardBox from "./components/UserDashboardBox";
import UserTable from "./components/UserTable";
var boxesProperties = [
    { name: "USERS", icon: users, amount: "2,453" },
    { name: "ACTIVE USERS", icon: activeUsers, amount: "2,453" },
    { name: "USERS WITH LOAN", icon: usersWithLoan, amount: "12,453" },
    { name: "USERS WITH SAVINGS", icon: usersWithSavings, amount: "102,453" },
];
export default function Users() {
    return (_jsxs("section", { className: "users", children: [_jsx("h2", { children: "Users" }), _jsx("ul", { className: "users-box", children: boxesProperties.map(function (dataBoxesProp) { return (_jsx(UserDashboardBox, { amount: dataBoxesProp.amount, icon: dataBoxesProp.icon, name: dataBoxesProp.name }, dataBoxesProp.name)); }) }), _jsx("div", { children: _jsx(UserTable, {}) })] }));
}
