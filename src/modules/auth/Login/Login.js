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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "@/assets/svgs/companyLogo.svg";
import loginIllustrator from "@/assets/images/loginPage.jpg";
import { Button } from "@/components/button";
var navigate_to = "/dashboard/users";
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
    return (_jsxs("div", { className: "login-page", children: [_jsxs("section", { children: [_jsx("img", { src: companyLogo, alt: "company's logo" }), _jsx("div", { className: "login-img", children: _jsx("img", { src: loginIllustrator, alt: "Sign in Page Illustrator" }) })] }), _jsx("section", { children: _jsxs("form", { className: "login-typography", onSubmit: handleFormSubmit, children: [_jsx("h1", { children: "Welcome!" }), _jsx("h5", { children: "Enter details to login" }), _jsx("input", { type: "email", placeholder: "Email", name: "email", id: "email", onChange: handleFormOnChange }), !formStateStatus.email && (_jsx("p", { className: "email-validator", children: "Email is required" })), _jsxs("div", { className: "show-password", children: [_jsx("input", { name: "password", id: "password", type: showPassword ? "text" : "password", placeholder: "Password", onChange: handleFormOnChange, value: formDetails.password }), _jsxs(Button, { size: "small", variant: "link", color: "primary", type: "button", onClick: function () { return setShowPassword(function (prev) { return !prev; }); }, children: [showPassword ? "HIDE" : "SHOW", " "] })] }), !formStateStatus.password && (_jsx("p", { className: "password-validator", children: "Enter an password" })), _jsx(Button, { size: "small", variant: "link", color: "primary", type: "button", className: "forgot-password", children: "FORGOT PASSWORD?" }), _jsx(Button, { onClick: handleFormSubmit, color: "primary", size: "small", type: "submit", variant: "block", children: "LOG IN" })] }) })] }));
};
export default Login;
