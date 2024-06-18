import { useEffect, useState } from "react";
var usePersistedState = function (_a) {
    var key = _a.key, defaultValue = _a.defaultValue;
    var _b = useState(function () {
        var storedState = localStorage.getItem(key);
        return storedState !== null ? JSON.parse(storedState) : defaultValue;
    }), state = _b[0], setState = _b[1];
    useEffect(function () {
        if (state !== undefined && state !== null) {
            localStorage.setItem(key, JSON.stringify(state));
        }
        else {
            localStorage.removeItem(key);
        }
    }, [key, state]);
    return { state: state, setState: setState };
};
export default usePersistedState;
