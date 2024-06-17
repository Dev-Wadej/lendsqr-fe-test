import { useEffect, useState } from "react";
export default function useClickOutside(ref, closeModal) {
    var _a = useState(false), clicked = _a[0], setClicked = _a[1];
    useEffect(function () {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setClicked(true);
                closeModal();
                return;
            }
            setClicked(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return clicked;
}
