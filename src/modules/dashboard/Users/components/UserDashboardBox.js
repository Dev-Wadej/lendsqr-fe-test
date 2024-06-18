import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function UserDashboardBox(_a) {
    var amount = _a.amount, icon = _a.icon, name = _a.name;
    return (_jsxs("li", { children: [_jsx("span", { className: "user-box-icon", children: _jsx("img", { src: icon, alt: "Icon" }) }), _jsx("span", { className: "users-box-title", children: name }), _jsx("span", { className: "users-box-amount", children: amount })] }));
}
