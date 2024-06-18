import React from "react";
export default function UserDashboardBox(_a) {
    var amount = _a.amount, icon = _a.icon, name = _a.name;
    return (React.createElement("li", null,
        React.createElement("span", { className: "user-box-icon" }, React.createElement("img", { src: icon, alt: "Icon" })),
        React.createElement("span", { className: "users-box-title" }, name),
        React.createElement("span", { className: "users-box-amount" }, amount)));
}
