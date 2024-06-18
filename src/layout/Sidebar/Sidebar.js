import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import arrowDown from "@/assets/svgs/arrowdown2.svg";
import briefcase from "@/assets/svgs/briefcase.svg";
import home from "@/assets/svgs/home.svg";
import { sidebar } from "@/assets/dummydata";
import "./Sidebar.scss";
export default function Sidebar(_a) {
    var setCloseSidebar = _a.setCloseSidebar;
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "sidebar", children: [_jsx("div", { className: "close", children: _jsx("button", { onClick: function () { return setCloseSidebar(); }, children: "X" }) }), _jsxs("div", { className: "sidebar-top", children: [_jsx("span", { children: _jsx("img", { src: briefcase, alt: "icon" }) }), _jsx("span", { children: "Switch Organization" }), _jsx("span", { children: _jsx("img", { src: arrowDown, alt: "icon" }) })] }), _jsxs("div", { className: "sidebar-dashboard sidebar-top", children: [_jsx("span", { children: _jsx("img", { src: home, alt: "icon" }) }), _jsx("p", { children: "Dashboard" })] }), _jsx("div", { className: "sidebar-links", children: sidebar.map(function (sidebar_details) { return (_jsxs(_Fragment, { children: [_jsx("h4", { children: sidebar_details.title.toUpperCase() }), sidebar_details.links.map(function (details, idx) { return (_jsxs(NavLink, { className: "sidebar-links-each", id: details === null || details === void 0 ? void 0 : details.id, to: (details === null || details === void 0 ? void 0 : details.path) ? details === null || details === void 0 ? void 0 : details.path : "/", children: [_jsx("span", { children: _jsx("img", { src: details.icons, alt: "sidebar icons" }) }), _jsx("span", { className: "sidebar-links-eaches", children: details.name })] }, idx)); })] })); }) })] }) }));
}
