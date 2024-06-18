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
    return (React.createElement("main", null,
        React.createElement("nav", { className: "navbar-top" },
            !showInput && (React.createElement("div", { className: "nav-logo" },
                React.createElement("img", { src: companyLogo, alt: "company logo" }))),
            React.createElement("div", { className: "nav-elements" },
                showInput && (React.createElement(React.Fragment, null,
                    " ",
                    React.createElement("input", { id: "show-small-device", type: "text", placeholder: "Search for anything" }),
                    React.createElement(Button, { color: "brand-blue", variant: "link", onClick: function () { return setShowInput(false); } }, "X"))),
                !showInput && (React.createElement(React.Fragment, null,
                    React.createElement("div", null,
                        React.createElement("input", { type: "text", placeholder: "Search For Anything" }),
                        React.createElement("span", null,
                            React.createElement("img", { src: search, alt: "search icon", onClick: function () { return setShowInput(true); } }))),
                    React.createElement("ul", { className: "navbar-ul" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Docs")),
                        React.createElement("li", null,
                            React.createElement("img", { src: bell, alt: "bell icon" })),
                        React.createElement("li", null,
                            React.createElement("img", { src: human, alt: "The User's thumbnail" }),
                            React.createElement("span", null,
                                " ",
                                "Adedeji",
                                React.createElement("span", null,
                                    React.createElement("img", { src: arrowDown, alt: "arrow icon" }))))))))),
        React.createElement("div", { className: showSidebar ? "show-sidebar" : "hide-sidebar" },
            React.createElement(Sidebar, { setCloseSidebar: function () { return setShowSidebar(false); } })),
        React.createElement("section", { className: "main-content" },
            React.createElement("div", { className: "hamburger" },
                React.createElement(Button, { color: "brand-blue", variant: "link" },
                    React.createElement("img", { src: hamburger, alt: "hamburger icon", onClick: function () { return setShowSidebar(true); } }))),
            React.createElement(Outlet, null))));
}
