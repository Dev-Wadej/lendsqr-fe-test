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
import * as React from "react";
import greaterthan from "@/assets/svgs/greaterthan.svg";
import "./index.scss";
var Pagination = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("nav", __assign({ role: "navigation", "aria-label": "pagination", className: "".concat(className !== null && className !== void 0 ? className : "") }, props)));
};
Pagination.displayName = "Pagination";
var PaginationContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("ul", __assign({ ref: ref, className: "".concat(className !== null && className !== void 0 ? className : "") }, props)));
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("li", __assign({ ref: ref, className: "".concat(className !== null && className !== void 0 ? className : "") }, props)));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = function (_a) {
    var className = _a.className, isActive = _a.isActive, props = __rest(_a, ["className", "isActive"]);
    return (React.createElement("button", __assign({ "aria-current": isActive ? "page" : undefined, className: "".concat(className !== null && className !== void 0 ? className : "") }, props)));
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(PaginationLink, __assign({ "aria-label": "Go to previous page", className: "".concat(className !== null && className !== void 0 ? className : "") }, props),
        React.createElement("img", { src: greaterthan, className: "rotate", alt: "icon" }),
        " "));
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(PaginationLink, __assign({ "aria-label": "Go to next page", className: "".concat(className !== null && className !== void 0 ? className : "") }, props),
        React.createElement("img", { src: greaterthan, alt: "icon" })));
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("span", __assign({ "aria-hidden": true, className: "".concat(className !== null && className !== void 0 ? className : "") }, props),
        React.createElement("button", null, "...")));
};
PaginationEllipsis.displayName = "PaginationEllipsis";
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };
