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
import Blog from "../components/Shared/Blog/Blog";
import About from "../components/Shared/About/About";

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
                loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-mahbub-alom.vercel.app/chefdata/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },

        ]
    }
])

export default router;