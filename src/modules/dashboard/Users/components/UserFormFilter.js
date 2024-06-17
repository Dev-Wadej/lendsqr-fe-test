import React, { useRef } from "react";
import "./index.scss";
import useClickOutside from "@/hooks/useClickOutside";
var UserFormFilter = function (_a) {
    var closeModal = _a.closeModal;
    var handleFilter = function (e) {
        e.preventDefault();
    };
    var ref = useRef(null);
    var clicked = useClickOutside(ref, closeModal);
    return (React.createElement("form", { className: "form-dropdown", ref: ref },
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "organization" }, "Organization"),
            React.createElement("select", { name: "organization", id: "organization" },
                React.createElement("option", { value: "select" }, "Select"))),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "username" }, "Username"),
            React.createElement("input", { type: "text", placeholder: "User", id: "username" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "email" }, "Email"),
            React.createElement("input", { type: "email", placeholder: "Email", id: "email" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "date" }, "Date"),
            React.createElement("input", { type: "date", placeholder: "Date", id: "date" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "number" }, "Phone Number"),
            React.createElement("input", { type: "number", placeholder: "Phone Number", id: "number" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "organization" }, "Organization"),
            React.createElement("select", { name: "organization", id: "organization" },
                React.createElement("option", { value: "select" }, "Select"))),
        React.createElement("br", null),
        React.createElement("div", { className: "form-btns" },
            React.createElement("button", { type: "reset" }, "Reset"),
            React.createElement("br", null),
            React.createElement("button", { onClick: handleFilter, type: "submit" }, "Filter"))));
};
export default UserFormFilter;
