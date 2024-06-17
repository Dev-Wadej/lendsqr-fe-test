import React, { useEffect, useRef } from "react";
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
    return (React.createElement("section", { ref: ref, className: "user-table-action" },
        React.createElement("div", null,
            React.createElement(Link, { to: id },
                React.createElement("span", null,
                    React.createElement("img", { src: eyes, alt: "Eye icon" })),
                React.createElement("span", null, "View Details"))),
        React.createElement("div", null,
            React.createElement("span", null,
                React.createElement("img", { src: blacklist, alt: "blacklist icon" })),
            React.createElement("span", null, "Blacklist User")),
        React.createElement("div", null,
            React.createElement("span", null,
                React.createElement("img", { src: activateUser, alt: "user icon" })),
            React.createElement("span", null, "Activate User"))));
};
export default UserTableAction;
