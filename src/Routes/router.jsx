import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path : '/',
        Component : HomeLayout,
        children:[
            {
                path: '',
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader:() => fetch('/public/news.json')
            }
        ]
    },
    {
        path : '/auth',
        element : <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                Component: Login
            },
            {
                path:'/auth/register',
                Component: Register
            },
        ]
    },
    {
        path : '/news',
        element : <h2>News Layout</h2>
    },
    {
        path : '/*',
        element : <h2>Error404</h2>
    },
])

export default router ;