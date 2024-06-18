import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Outlet } from "react-router-dom";
import companyLogo from "@/assets/svgs/companyLogo.svg";
import search from "@/assets/svgs/search.svg";
import arrowDown from "@/assets/svgs/arrowdown.svg";
import human from "@/assets/images/human.jpg";
import bell from "@/assets/svgs/bell.svg";
import hamburger from "@/assets/svgs/hamburger.svg";
import Sidebar from "./Sidebar/Sidebar";
import "./index.scss";
import { Button } from "@/components/button";
export default function DashboardLayout() {
    var _a = React.useState(false), showInput = _a[0], setShowInput = _a[1];
    var _b = React.useState(false), showSidebar = _b[0], setShowSidebar = _b[1];
    return (_jsxs("main", { children: [_jsxs("nav", { className: "navbar-top", children: [!showInput && (_jsx("div", { className: "nav-logo", children: _jsx("img", { src: companyLogo, alt: "company logo" }) })), _jsxs("div", { className: "nav-elements", children: [showInput && (_jsxs(_Fragment, { children: [" ", _jsx("input", { id: "show-small-device", type: "text", placeholder: "Search for anything" }), _jsx(Button, { color: "brand-blue", variant: "link", onClick: function () { return setShowInput(false); }, children: "X" })] })), !showInput && (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "Search For Anything" }), _jsx("span", { children: _jsx("img", { src: search, alt: "search icon", onClick: function () { return setShowInput(true); } }) })] }), _jsxs("ul", { className: "navbar-ul", children: [_jsx("li", { children: _jsx("a", { href: "#", children: "Docs" }) }), _jsx("li", { children: _jsx("img", { src: bell, alt: "bell icon" }) }), _jsxs("li", { children: [_jsx("img", { src: human, alt: "The User's thumbnail" }), _jsxs("span", { children: [" ", "Adedeji", _jsx("span", { children: _jsx("img", { src: arrowDown, alt: "arrow icon" }) })] })] })] })] }))] })] }), _jsx("div", { className: showSidebar ? "show-sidebar" : "hide-sidebar", children: _jsx(Sidebar, { setCloseSidebar: function () { return setShowSidebar(false); } }) }), _jsxs("section", { className: "main-content", children: [_jsx("div", { className: "hamburger", children: _jsx(Button, { color: "brand-blue", variant: "link", children: _jsx("img", { src: hamburger, alt: "hamburger icon", onClick: function () { return setShowSidebar(true); } }) }) }), _jsx(Outlet, {})] })] }));
}
