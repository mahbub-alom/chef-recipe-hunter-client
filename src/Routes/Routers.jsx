import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../components/Shared/Main/Main";
import Home from "../components/Shared/Home";
import Data from "../components/Shared/data/Data";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/data/:id',
                element: <Data></Data>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefdata/${params.id}`)
            }
        ]
    }
])

export default router;