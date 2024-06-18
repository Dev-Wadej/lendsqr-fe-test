import { NavLink } from "react-router-dom";
import React from "react";
import arrowDown from "@/assets/svgs/arrowdown2.svg";
import briefcase from "@/assets/svgs/briefcase.svg";
import home from "@/assets/svgs/home.svg";
import { sidebar } from "@/assets/dummydata";
import "./Sidebar.scss";
export default function Sidebar(_a) {
    var setCloseSidebar = _a.setCloseSidebar;
    return (React.createElement(React.Fragment, null, React.createElement("section", { className: "sidebar" },
        React.createElement("div", { className: "close" },
            React.createElement("button", { onClick: function () { return setCloseSidebar(); } }, "X")),
        React.createElement("div", { className: "sidebar-top" },
            React.createElement("span", null,
                React.createElement("img", { src: briefcase, alt: "icon" })),
            React.createElement("span", null, "Switch Organization"),
            React.createElement("span", null,
                React.createElement("img", { src: arrowDown, alt: "icon" }))),
        React.createElement("div", { className: "sidebar-dashboard sidebar-top" },
            React.createElement("span", null,
                React.createElement("img", { src: home, alt: "icon" })),
            React.createElement("p", null, "Dashboard")),
        React.createElement("div", { className: "sidebar-links" }, sidebar.map(function (sidebar_details) { return (React.createElement(React.Fragment, null,
            React.createElement("h4", null, sidebar_details.title.toUpperCase()),
            sidebar_details.links.map(function (details, idx) { return (React.createElement(NavLink, { key: idx, className: "sidebar-links-each", id: details === null || details === void 0 ? void 0 : details.id, to: (details === null || details === void 0 ? void 0 : details.path) ? details === null || details === void 0 ? void 0 : details.path : "/" },
                React.createElement("span", null,
                    React.createElement("img", { src: details.icons, alt: "sidebar icons" })),
                React.createElement("span", { className: "sidebar-links-eaches" }, details.name))); }))); })))));
}
