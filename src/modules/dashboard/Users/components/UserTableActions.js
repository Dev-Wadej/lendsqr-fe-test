import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import blacklist from "@/assets/svgs/blacklistuser.svg";
import activateUser from "@/assets/svgs/activateuser.svg";
import eyes from "@/assets/svgs/eyes.svg";
import { Link } from "react-router-dom";
import "./index.scss";
import useClickOutside from "@/hooks/useClickOutside";
var UserTableAction = function (_a) {
    var id = _a.id, closeModal = _a.closeModal;
    var ref = useRef(null);
    var clicked = useClickOutside(ref, closeModal);
    useEffect(function () {
        console.log("here");
    }, [clicked]);
    return (_jsxs("section", { ref: ref, className: "user-table-action", children: [_jsx("div", { children: _jsxs(Link, { to: id, id: "table-action", children: [_jsx("span", { children: _jsx("img", { src: eyes, alt: "Eye icon" }) }), _jsx("span", { children: "View Details" })] }) }), _jsxs("div", { children: [_jsx("span", { children: _jsx("img", { src: blacklist, alt: "blacklist icon" }) }), _jsx("span", { children: "Blacklist User" })] }), _jsxs("div", { children: [_jsx("span", { children: _jsx("img", { src: activateUser, alt: "user icon" }) }), _jsx("span", { children: "Activate User" })] })] }));
};
export default UserTableAction;
