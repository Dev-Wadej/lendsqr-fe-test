import React, { useMemo, useState } from "react";
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
        return (React.createElement("div", { className: "loading" },
            React.createElement(Progressbar, null)));
    return (React.createElement("section", null,
        React.createElement("div", { className: "user-table-wrapper relative overflow-scroll" },
            showFilterForm && (React.createElement(UserFormFilter, { closeModal: function () { return setShowFilterForm(false); } })),
            React.createElement(Table, null,
                React.createElement(TableHeader, null,
                    React.createElement(TableRow, null, headerText.map(function (header, idx) { return (React.createElement(TableHead, { key: header, className: "" },
                        React.createElement("button", { className: "user-table-header p-8 ".concat(idx === 3 || idx === 4 ? "w-sm" : ""), onClick: function () { return setShowFilterForm(function (prev) { return !prev; }); } },
                            header,
                            header && React.createElement("img", { src: dropDown, alt: "Icon" })))); }))),
                React.createElement(TableBody, null, (_a = users === null || users === void 0 ? void 0 : users.slice(firstContentIndex, lastContentIndex)) === null || _a === void 0 ? void 0 : _a.map(function (user) { return (React.createElement(TableRow, { key: user.id, className: "user-table-row" },
                    React.createElement(TableCell, { className: "user-table-cell p-5" }, user.orgName),
                    React.createElement(TableCell, { className: "user-table-cell p-5" }, user.userName),
                    React.createElement(TableCell, { className: "user-table-cell p-5" }, user.email),
                    React.createElement(TableCell, { className: "user-table-cell p-5" }, user.phoneNumber),
                    React.createElement(TableCell, { className: "user-table-cell p-5" }, new Date(user.createdAt).toLocaleString("en-US")),
                    React.createElement(TableCell, { className: "user-table-cell p-5" },
                        React.createElement(StatusBadge, null)),
                    React.createElement(TableCell, { className: "user-table-cell p-5 relative" },
                        React.createElement("button", { className: "rotate-90", onClick: function () {
                                setOpenTbleAction(function (prev) { return !prev; });
                                setClickedRowId(user === null || user === void 0 ? void 0 : user.id);
                            } }, "..."),
                        opeTableAction && user.id === clickedRowId && (React.createElement(UserTableAction, { closeModal: function () { return setOpenTbleAction(false); }, id: user === null || user === void 0 ? void 0 : user.id }))))); })))),
        React.createElement("div", { className: "user-table-footer" },
            React.createElement("div", { className: "pagination" },
                React.createElement("span", null, "Showing"),
                React.createElement("span", null,
                    React.createElement("select", { name: "Show More", id: "pagination", onChange: function (e) {
                            setPage(Number(e.target.value));
                        } }, jumpTopageArray.map(function (userNum, idx) { return (React.createElement("option", { value: idx + 1 }, userNum * (idx + 1))); }))),
                React.createElement("span", null,
                    "out of ", users === null || users === void 0 ? void 0 :
                    users.length)),
            React.createElement(Pagination, null,
                React.createElement(PaginationContent, { className: "pagination-wrapper" },
                    React.createElement(PaginationItem, null,
                        React.createElement(PaginationPrevious, { onClick: prevPage, className: "".concat(page === 1 ? "active-icon" : "inactive-icon"), disabled: page === 1 })),
                    React.createElement(PaginationItem, null,
                        React.createElement(PaginationLink, { className: "".concat(page === 1 ? "active" : ""), onClick: function () { return setPage(1); }, disabled: page === 1 }, "1")),
                    gaps.before ? (React.createElement(PaginationItem, null,
                        React.createElement(PaginationLink, null, React.createElement(PaginationEllipsis, null)))) : null,
                    gaps.paginationGroup.map(function (el) { return (React.createElement(PaginationLink, { onClick: function () { return setPage(el); }, key: el, className: "page ".concat(page === el ? "active" : "") }, el)); }),
                    gaps.after ? (React.createElement(PaginationItem, null,
                        React.createElement(PaginationLink, null, React.createElement(PaginationEllipsis, null)))) : null,
                    React.createElement(PaginationItem, null,
                        React.createElement(PaginationLink, { disabled: page === totalPages, onClick: function () { return setPage(totalPages); } }, totalPages)),
                    React.createElement(PaginationItem, null,
                        React.createElement(PaginationNext, { className: "".concat(page === totalPages ? "active-icon" : "inactive-icon"), onClick: nextPage, disabled: page === totalPages })))))));
}
