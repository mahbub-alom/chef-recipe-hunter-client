import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../components/Shared/Main/Main";
import Home from "../components/Shared/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;