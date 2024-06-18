import { jsx as _jsx } from "react/jsx-runtime";
import "./index.scss";
var status = [
    { title: "Active", color: "#39CD62", backgroundColor: "#F3FCF6" },
    { title: "Blacklisted", color: "#E4033B", backgroundColor: "#FCE6EB" },
    { title: "Pending", color: "#E9B200", backgroundColor: "#FDF7E5" },
    { title: "Inactive", color: "#545F7D", backgroundColor: "#F5F5F7" },
];
var randomStatusValue = function () {
    var value = Math.floor(Math.random() * status.length);
    var _a = status[value], backgroundColor = _a.backgroundColor, color = _a.color, title = _a.title;
    return { backgroundColor: backgroundColor, color: color, title: title };
};
export default function StatusBadge() {
    var _a = randomStatusValue(), backgroundColor = _a.backgroundColor, color = _a.color, title = _a.title;
    return (_jsx("span", { style: { color: color, backgroundColor: backgroundColor }, className: "status-badge", children: title }));
}
