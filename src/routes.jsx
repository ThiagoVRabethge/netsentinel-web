import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import RegisterUsers from "./pages/RegisterUsers"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/register-users",
        element: <RegisterUsers />,
    },
])

export default Routes