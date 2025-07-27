import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Dashboard from "./pages/dashboard/Dashboard"
import RegisterUsers from "./pages/registerUsers/RegisterUsers"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/register-users",
        element: <RegisterUsers />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
])

export default Routes