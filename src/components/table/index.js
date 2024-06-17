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
import "./index.scss";
var Table = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", null,
        React.createElement("table", __assign({ className: "table-wrapper ".concat(className), ref: ref }, props))));
});
Table.displayName = "Table";
var TableHeader = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("thead", __assign({ ref: ref }, props, { className: "table-header ".concat(className) })));
});
TableHeader.displayName = "TableHeader";
var TableBody = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("tbody", __assign({ className: "table-body ".concat(className), ref: ref }, props)));
});
TableBody.displayName = "TableBody";
var TableRow = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("tr", __assign({ className: "table-row ".concat(className), ref: ref }, props)));
});
TableRow.displayName = "TableRow";
var TableHead = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("th", __assign({ className: " ".concat(className), ref: ref }, props)));
});
TableHead.displayName = "TableHead";
var TableCell = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("td", __assign({ ref: ref, className: " ".concat(className) }, props)));
});
TableCell.displayName = "TableCell";
export { Table, TableHeader, TableBody, TableHead, TableRow, TableCell };
