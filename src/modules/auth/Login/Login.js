var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import "./login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "@/assets/svgs/companyLogo.svg";
import loginIllustrator from "@/assets/images/loginPage.jpg";
import { Button } from "@/components/button";
var navigate_to = "/dashboard/user";
var Login = function () {
    var navigate = useNavigate();
    var _a = useState({ password: "", email: "" }), formDetails = _a[0], setFormDetails = _a[1];
    var _b = useState({
        password: true,
        email: true,
    }), formStateStatus = _b[0], setFormStateStatus = _b[1];
    var _c = useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var handleFormSubmit = function (e) {
        e.preventDefault();
        if (!formDetails.email) {
            setFormStateStatus(function (prev) { return (__assign(__assign({}, prev), { email: false })); });
            return;
        }
        if (!formDetails.password) {
            setFormStateStatus(function (prev) { return (__assign(__assign({}, prev), { password: false })); });
            return;
        }
        if (formDetails.email && formDetails.password) {
            navigate(navigate_to);
        }
    };
    var handleFormOnChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormDetails(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
        setFormStateStatus(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = true, _a)));
        });
    };
    return (React.createElement("div", { className: "login-page" },
        React.createElement("section", null,
            React.createElement("img", { src: companyLogo, alt: "company's logo" }),
            React.createElement("div", { className: "login-img" },
                React.createElement("img", { src: loginIllustrator, alt: "Sign in Page Illustrator" }))),
        React.createElement("section", null,
            React.createElement("form", { className: "login-typography", onSubmit: handleFormSubmit },
                React.createElement("h1", null, "Welcome!"),
                React.createElement("h5", null, "Enter details to login"),
                React.createElement("input", { type: "email", placeholder: "Email", name: "email", onChange: handleFormOnChange }),
                !formStateStatus.email && (React.createElement("p", { className: "email-validator" }, "Email is required")),
                React.createElement("div", { className: "show-password" },
                    React.createElement("input", { name: "password", type: showPassword ? "text" : "password", placeholder: "Password", onChange: handleFormOnChange, value: formDetails.password }),
                    React.createElement(Button, { size: "small", variant: "link", color: "primary", type: "button", onClick: function () { return setShowPassword(function (prev) { return !prev; }); } },
                        showPassword ? "HIDE" : "SHOW",
                        " ")),
                !formStateStatus.password && (React.createElement("p", { className: "password-validator" }, "Enter an password")),
                React.createElement(Button, { size: "small", variant: "link", color: "primary", type: "button", className: "forgot-password" }, "FORGOT PASSWORD?"),
                React.createElement(Button, { onClick: handleFormSubmit, color: "primary", size: "small", type: "submit", variant: "block" }, "LOG IN")))));
};
export default Login;
