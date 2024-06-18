import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
function App() {
    return _jsx(RouterProvider, { router: routes });
}
export default App;
