import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
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
        return (_jsx("div", { className: "user-loader-section", children: _jsx(Progressbar, {}) }));
    return (_jsx("div", { children: _jsxs("section", { className: "user-details-section", children: [_jsxs("div", { onClick: handleNavigationUser, className: "user-details-arrow-back", style: { cursor: "pointer" }, children: [_jsx("span", { children: _jsx("img", { src: arrowBack, alt: "Icon" }) }), _jsx("span", { children: "Back to Users" })] }), _jsxs("div", { className: "user-details-header", children: [_jsx("h3", { children: "User Details" }), _jsxs("dl", { children: [_jsx(Button, { color: "danger", variant: "outline", children: "BLACKLIST USER" }), _jsx(Button, { color: "primary", variant: "outline", children: "ACTIVATE USER" })] })] }), _jsxs("div", { className: "user-top-details-wrapper", children: [_jsxs("section", { className: "user-details-top", children: [_jsxs("aside", { className: "user-details-avatar-wrapper", children: [_jsx("span", { className: "avatar-img", children: _jsx("img", { src: (_v = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _v === void 0 ? void 0 : _v.avatar, alt: "User Avatar" }) }), _jsxs("div", { children: [_jsxs("h4", { children: [(_w = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _w === void 0 ? void 0 : _w.firstName, " ", (_x = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.profile) === null || _x === void 0 ? void 0 : _x.lastName] }), _jsx("span", { children: userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.accountNumber })] })] }), _jsxs("aside", { className: "user-tier", children: [_jsx("h3", { children: "User's Tier" }), _jsxs("span", { children: [_jsx("img", { src: starFilled, alt: "Icon" }), _jsx("img", { src: starUnfilled, alt: "Icon" }), _jsx("img", { src: starUnfilled, alt: "Icon" })] })] }), _jsxs("aside", { className: "user-numerics", children: [_jsx("h4", { children: "\u20A6200,000.00" }), _jsx("p", { children: "9912345678/Providus Bank" })] })] }), _jsxs("section", { className: "user-tab", children: [_jsx("button", { className: "active", children: "General Details" }), buttonWords.map(function (btnword) { return (_jsx("button", { children: btnword })); })] })] }), _jsx("section", { className: "user-heavy-info", children: _jsx("aside", { className: "user-personal-info", children: user_details === null || user_details === void 0 ? void 0 : user_details.map(function (details, idx) { return (_jsxs(_Fragment, { children: [_jsx("h5", { children: details.name }), _jsx("div", { children: details.details.map(function (details_for_user) { return (_jsxs("dl", { children: [_jsx("div", { className: "user-name", children: details_for_user.title }), _jsx("div", { children: details_for_user.title_details })] })); }) }), (details === null || details === void 0 ? void 0 : details.details.length) !== idx && _jsx("hr", {})] })); }) }) })] }) }));
};
export default User;
