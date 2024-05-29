import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secrete from "../pages/Secrete";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Cart from "../layouts/Dashboard/Cart";
import AllUsers from "../layouts/Dashboard/AllUsers";
import AddItems from "../layouts/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../layouts/Dashboard/ManageItems";
import UpdateMenu from "../layouts/Dashboard/UpdateMenu";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        children: [


            {
                path: '/',
                element: <MainLayout></MainLayout>,
                children: [
                    {
                        path: '/',
                        element: <Home></Home>
                    },
                    {
                        path: 'menu',
                        element: <Menu></Menu>
                    },
                    {
                        path: 'order/:category',
                        element: <Order></Order>
                    },
                    {
                        path: 'secrete',
                        element: <PrivateRoute><Secrete></Secrete></PrivateRoute>
                    },
                    {
                        path: 'login',
                        element: <Login></Login>
                    },
                    {
                        path: 'register',
                        element: <Register></Register>
                    },
                ]
            }
        ]

    },

    // dashboard
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // admin only routes
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItems/:id',
                element: <AdminRoute><UpdateMenu></UpdateMenu></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },

            // normal user routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
        ]
    }
])

export default router;