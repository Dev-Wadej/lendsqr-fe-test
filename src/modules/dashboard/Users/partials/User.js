import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./user.scss";
import usePersistedState from "@/hooks/usePersistedState";
import arrowBack from "@/assets/svgs/backarrow.svg";
import starFilled from "@/assets/svgs/starfilled.svg";
import starUnfilled from "@/assets/svgs/starunfilled.svg";
import useFetch, { base_url } from "@/hooks/useFetch";
import { Button } from "@/components/button";
import Progressbar from "@/components/progress-bar";
var buttonWords = [
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
];
var User = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    var navigate = useNavigate();
    var user_id = useParams().user_id;
    var _y = useFetch("".concat(base_url, "/").concat(user_id)), data = _y.data, loading = _y.loading;
    var _z = usePersistedState({
        key: "user-".concat(user_id),
        defaultValue: undefined,
    }), userCredentials = _z.state, setState = _z.setState;
    var handleNavigationUser = function () {
        navigate("/dashboard/users");
    };
    useEffect(function () {
        if (!userCredentials) {
            setState(data);
        }
    }, [data, userCredentials]);
    var user_details = [
        {
            name: "Personal Information",
            details: [
                {
                    title: "Full name",
                    title_details: "".concat((_a = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _a === void 0 ? void 0 : _a.firstName, " ").concat((_b = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _b === void 0 ? void 0 : _b.lastName),
                },
                {
                    title: "Phone Number",
                    title_details: (_c = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _c === void 0 ? void 0 : _c.phoneNumber,
                },
                { title: "Email", title_details: userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.email },
                { title: "Bvn", title_details: (_d = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _d === void 0 ? void 0 : _d.bvn },
                { title: "Gender", title_details: (_e = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _e === void 0 ? void 0 : _e.gender },
                { title: "Marital Status", title_details: "Single" },
                { title: "Children", title_details: "None" },
                { title: "Type of Residence", title_details: "Parent’s Apartment" },
            ],
        },
        {
            name: "Education and Employment",
            details: [
                {
                    title: "level of education",
                    title_details: (_f = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.education) === null || _f === void 0 ? void 0 : _f.level,
                },
                {
                    title: "employment status",
                    title_details: (_g = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.education) === null || _g === void 0 ? void 0 : _g.employmentStatus,
                },
                {
                    title: "sector of employment",
                    title_details: (_h = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.education) === null || _h === void 0 ? void 0 : _h.sector,
                },
                {
                    title: "Duration of employment",
                    title_details: (_j = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.education) === null || _j === void 0 ? void 0 : _j.duration,
                },
                {
                    title: "office email",
                    title_details: (_k = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.education) === null || _k === void 0 ? void 0 : _k.officeEmail,
                },
                {
                    title: "Monthly income",
                    title_details: "\u20A6".concat((_l = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.education) === null || _l === void 0 ? void 0 : _l.monthlyIncome[0], " - \u20A6").concat((_m = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.education) === null || _m === void 0 ? void 0 : _m.monthlyIncome[1]),
                },
                {
                    title: "loan repayment",
                    title_details: (_o = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.education) === null || _o === void 0 ? void 0 : _o.loanRepayment,
                },
            ],
        },
        {
            name: "Socials",
            details: [
                { title: "Twitter", title_details: (_p = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.socials) === null || _p === void 0 ? void 0 : _p.twitter },
                {
                    title: "Facebook",
                    title_details: (_q = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.socials) === null || _q === void 0 ? void 0 : _q.facebook,
                },
                {
                    title: "Instagram",
                    title_details: (_r = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.socials) === null || _r === void 0 ? void 0 : _r.instagram,
                },
            ],
        },
        {
            name: "Guarantor",
            details: [
                {
                    title: "full Name",
                    title_details: "".concat((_s = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.guarantor) === null || _s === void 0 ? void 0 : _s.firstName, " ").concat((_t = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.guarantor) === null || _t === void 0 ? void 0 : _t.lastName),
                },
                {
                    title: "Phone Number",
                    title_details: (_u = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.guarantor) === null || _u === void 0 ? void 0 : _u.phoneNumber,
                },
                { title: "Email Address", title_details: "debby@gmail.com" },
                { title: "Relationship", title_details: "Sister" },
            ],
        },
        {
            name: "",
            details: [
                { title: "Full Name", title_details: "Debby Ogana" },
                { title: "Phone Number", title_details: "07060780922" },
                { title: "Email Address", title_details: "debby@gmail.com" },
                { title: "Relationship", title_details: "Sister" },
            ],
        },
    ];
    if (loading)
        return (React.createElement("div", { className: "user-loader-section" },
            React.createElement(Progressbar, null)));
    return (React.createElement("div", null,
        React.createElement("section", { className: "user-details-section" },
            React.createElement("div", { onClick: handleNavigationUser, className: "user-details-arrow-back", style: { cursor: "pointer" } },
                React.createElement("span", null,
                    React.createElement("img", { src: arrowBack, alt: "Icon" })),
                React.createElement("span", null, "Back to Users")),
            React.createElement("div", { className: "user-details-header" },
                React.createElement("h3", null, "User Details"),
                React.createElement("dl", null,
                    React.createElement(Button, { color: "danger", variant: "outline" }, "BLACKLIST USER"),
                    React.createElement(Button, { color: "primary", variant: "outline" }, "ACTIVATE USER"))),
            React.createElement("div", { className: "user-top-details-wrapper" },
                React.createElement("section", { className: "user-details-top" },
                    React.createElement("aside", { className: "user-details-avatar-wrapper" },
                        React.createElement("span", { className: "avatar-img" },
                            React.createElement("img", { src: (_v = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _v === void 0 ? void 0 : _v.avatar, alt: "User Avatar" })),
                        React.createElement("div", null,
                            React.createElement("h4", null, (_w = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _w === void 0 ? void 0 :
                                _w.firstName,
                                " ", (_x = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _x === void 0 ? void 0 :
                                _x.lastName),
                            React.createElement("span", null, userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.accountNumber))),
                    React.createElement("aside", { className: "user-tier" },
                        React.createElement("h3", null, "User's Tier"),
                        React.createElement("span", null,
                            React.createElement("img", { src: starFilled, alt: "Icon" }),
                            React.createElement("img", { src: starUnfilled, alt: "Icon" }),
                            React.createElement("img", { src: starUnfilled, alt: "Icon" }))),
                    React.createElement("aside", { className: "user-numerics" },
                        React.createElement("h4", null, "\u20A6200,000.00"),
                        React.createElement("p", null, "9912345678/Providus Bank"))),
                React.createElement("section", { className: "user-tab" },
                    React.createElement("button", { className: "active" }, "General Details"),
                    buttonWords.map(function (btnword) { return (React.createElement("button", null, btnword)); }))),
            React.createElement("section", { className: "user-heavy-info" },
                React.createElement("aside", { className: "user-personal-info" }, user_details === null || user_details === void 0 ? void 0 : user_details.map(function (details, idx) { return (React.createElement(React.Fragment, null,
                    React.createElement("h5", null, details.name),
                    React.createElement("div", null, details.details.map(function (details_for_user, idx) { return (React.createElement("dl", null,
                        React.createElement("div", { className: "user-name" }, details_for_user.title),
                        React.createElement("div", null, details_for_user.title_details))); })),
                    (details === null || details === void 0 ? void 0 : details.details.length) !== idx && React.createElement("hr", null))); }))))));
};
export default User;
