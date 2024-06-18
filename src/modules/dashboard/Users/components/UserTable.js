import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/table";
import dropDown from "@/assets/svgs/dropdown.svg";
import useFetch from "@/hooks/useFetch";
import Progressbar from "@/components/progress-bar";
import StatusBadge from "./StatusBadge";
import "./index.scss";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/pagination";
import usePagination from "@/hooks/usePaginate";
import UserTableAction from "./UserTableActions";
import UserFormFilter from "./UserFormFilter";
var headerText = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
    "",
];
var numberPerpage = 9;
export default function UserTable() {
    var _a;
    var _b = useFetch(), data = _b.data, loading = _b.loading;
    var _c = useState(false), opeTableAction = _c[0], setOpenTbleAction = _c[1];
    var _d = useState(false), showFilterForm = _d[0], setShowFilterForm = _d[1];
    var _e = useState(""), clickedRowId = _e[0], setClickedRowId = _e[1];
    var users = useMemo(function () { return data !== null && data !== void 0 ? data : []; }, [data]);
    var _f = usePagination({
        contentPerPage: 9,
        count: users === null || users === void 0 ? void 0 : users.length,
    }), firstContentIndex = _f.firstContentIndex, gaps = _f.gaps, lastContentIndex = _f.lastContentIndex, nextPage = _f.nextPage, page = _f.page, prevPage = _f.prevPage, setPage = _f.setPage, totalPages = _f.totalPages;
    var jumpTopageArray = Array.from({ length: Math.floor((users === null || users === void 0 ? void 0 : users.length) / numberPerpage) }, function () { return numberPerpage; });
    if (loading)
        return (_jsx("div", { className: "loading", children: _jsx(Progressbar, {}) }));
    return (_jsxs("section", { children: [_jsxs("div", { className: "user-table-wrapper relative overflow-scroll", children: [showFilterForm && (_jsx(UserFormFilter, { closeModal: function () { return setShowFilterForm(false); } })), _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsx(TableRow, { children: headerText.map(function (header, idx) { return (_jsx(TableHead, { className: "", children: _jsxs("button", { className: "user-table-header p-8 ".concat(idx === 3 || idx === 4 ? "w-sm" : ""), onClick: function () { return setShowFilterForm(function (prev) { return !prev; }); }, children: [header, header && _jsx("img", { src: dropDown, alt: "Icon" })] }) }, header)); }) }) }), _jsx(TableBody, { children: (_a = users === null || users === void 0 ? void 0 : users.slice(firstContentIndex, lastContentIndex)) === null || _a === void 0 ? void 0 : _a.map(function (user) { return (_jsxs(TableRow, { className: "user-table-row", children: [_jsx(TableCell, { className: "user-table-cell p-5", children: user.orgName }), _jsx(TableCell, { className: "user-table-cell p-5", children: user.userName }), _jsx(TableCell, { className: "user-table-cell p-5", children: user.email }), _jsx(TableCell, { className: "user-table-cell p-5", children: user.phoneNumber }), _jsx(TableCell, { className: "user-table-cell p-5", children: new Date(user.createdAt).toLocaleString("en-US") }), _jsx(TableCell, { className: "user-table-cell p-5", children: _jsx(StatusBadge, {}) }), _jsxs(TableCell, { className: "user-table-cell p-5 relative", children: [_jsx("button", { className: "rotate-90", id: "status", onClick: function () {
                                                        setOpenTbleAction(function (prev) { return !prev; });
                                                        setClickedRowId(user === null || user === void 0 ? void 0 : user.id);
                                                    }, children: "..." }), opeTableAction && user.id === clickedRowId && (_jsx(UserTableAction, { closeModal: function () { return setOpenTbleAction(false); }, id: user === null || user === void 0 ? void 0 : user.id }))] })] }, user.id)); }) })] })] }), _jsxs("div", { className: "user-table-footer", children: [_jsxs("div", { className: "pagination", children: [_jsx("span", { children: "Showing" }), _jsx("span", { children: _jsx("select", { name: "Show More", id: "pagination", onChange: function (e) {
                                        setPage(Number(e.target.value));
                                    }, children: jumpTopageArray.map(function (userNum, idx) { return (_jsx("option", { value: idx + 1, children: userNum * (idx + 1) })); }) }) }), _jsxs("span", { children: ["out of ", users === null || users === void 0 ? void 0 : users.length] })] }), _jsx(Pagination, { children: _jsxs(PaginationContent, { className: "pagination-wrapper", children: [_jsx(PaginationItem, { children: _jsx(PaginationPrevious, { onClick: prevPage, className: "".concat(page === 1 ? "active-icon" : "inactive-icon"), disabled: page === 1 }) }), _jsx(PaginationItem, { children: _jsx(PaginationLink, { className: "".concat(page === 1 ? "active" : ""), onClick: function () { return setPage(1); }, disabled: page === 1, children: "1" }) }), gaps.before ? (_jsx(PaginationItem, { children: _jsx(PaginationLink, { children: _jsx(PaginationEllipsis, {}) }) })) : null, gaps.paginationGroup.map(function (el) { return (_jsx(PaginationLink, { onClick: function () { return setPage(el); }, className: "page ".concat(page === el ? "active" : ""), children: el }, el)); }), gaps.after ? (_jsx(PaginationItem, { children: _jsx(PaginationLink, { children: _jsx(PaginationEllipsis, {}) }) })) : null, _jsx(PaginationItem, { children: _jsx(PaginationLink, { disabled: page === totalPages, onClick: function () { return setPage(totalPages); }, children: totalPages }) }), _jsx(PaginationItem, { children: _jsx(PaginationNext, { className: "".concat(page === totalPages ? "active-icon" : "inactive-icon"), onClick: nextPage, disabled: page === totalPages }) })] }) })] })] }));
}
