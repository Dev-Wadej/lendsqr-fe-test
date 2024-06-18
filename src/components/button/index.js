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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import "./button.scss";
var Button = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.variant, variant = _c === void 0 ? "block" : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, children = _a.children, _e = _a.className, className = _e === void 0 ? "" : _e, buttonProps = __rest(_a, ["color", "variant", "size", "children", "className"]);
    var colorClass = "btn-".concat(color);
    var variantClass = "btn-".concat(variant);
    var sizeClass = "btn-".concat(size);
    return (React.createElement("button", __assign({}, buttonProps, { className: "btn ".concat(sizeClass, " ").concat(colorClass, " \n        ").concat(variantClass, " ").concat(className !== null && className !== void 0 ? className : "") }), children));
};
export { Button };
