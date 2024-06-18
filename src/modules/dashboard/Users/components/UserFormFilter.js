import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "./index.scss";
import useClickOutside from "@/hooks/useClickOutside";
var UserFormFilter = function (_a) {
    var closeModal = _a.closeModal;
    var handleFilter = function (e) {
        e.preventDefault();
    };
    var ref = useRef(null);
    var clicked = useClickOutside(ref, closeModal);
    useEffect(function () {
        console.log("here");
    }, [clicked]);
    return (_jsxs("form", { className: "form-dropdown", ref: ref, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "organization", children: "Organization" }), _jsx("select", { name: "organization", id: "organization", children: _jsx("option", { value: "select", children: "Select" }) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "username", children: "Username" }), _jsx("input", { type: "text", placeholder: "User", id: "username" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { type: "email", placeholder: "Email", id: "email" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "date", children: "Date" }), _jsx("input", { type: "date", placeholder: "Date", id: "date" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "number", children: "Phone Number" }), _jsx("input", { type: "number", placeholder: "Phone Number", id: "number" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "organization", children: "Organization" }), _jsx("select", { name: "organization", id: "organization", children: _jsx("option", { value: "select", children: "Select" }) })] }), _jsx("br", {}), _jsxs("div", { className: "form-btns", children: [_jsx("button", { type: "reset", children: "Reset" }), _jsx("br", {}), _jsx("button", { onClick: handleFilter, type: "submit", children: "Filter" })] })] }));
};
export default UserFormFilter;
