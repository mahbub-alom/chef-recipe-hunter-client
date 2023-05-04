import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../components/Shared/Main/Main";
import Home from "../components/Shared/Home";
import Data from "../components/Shared/data/Data";
import Login from "../components/Shared/Login/Login";
import Register from "../components/Shared/Register/Register";
import PrivateRoute from "../components/PrivateRouter/PrivateRoute";
import Error from "../components/Shared/Errorpage/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/data/:id',
                element: <PrivateRoute>
                    <Data></Data>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefdata/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
])

export default router;