import { RouterProvider } from "react-router-dom"
import routes from "./routes/routes"
import React from "react"

function App() {
  return <RouterProvider router={routes} />
}

export default App