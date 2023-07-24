import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import Forgetpass from "../Pages/Forgetpass/Forgetpass";
import Profile from "../Pages/Home/Profile/Profile";
import UpdateUser from "../Pages/UpdateUser/UpdateUser";
import Collage from "../Pages/Collage/Collage";
import ViewDeatails from "../Pages/ViewDeatails/ViewDeatails";
import Admisission from "../Pages/Admisission/Admisission";
import Enroll from "../Pages/Enroll/Enroll";
import MyCollege from "../Pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            }, {
                path: "forgetpass",
                element: <Forgetpass></Forgetpass>
            },
            {
                path: "profile",
                element: <Profile></Profile>
            }, {
                path: "updateuser",
                element: <UpdateUser></UpdateUser>
            }, {
                path: "collages",
                element: <Collage></Collage>
            },
            {
                path: 'collages/:id',
                element: <ViewDeatails></ViewDeatails>,
                loader: ({ params }) => fetch(`http://localhost:5000/collages/${params.id}`)
            },
            {
                path: "admission",
                element: <Admisission></Admisission>
            },
            {
                path: "admission/:id",
                element: <Enroll></Enroll>,
                loader: ({ params }) => fetch(`http://localhost:5000/admission/${params.id}`)
            },
            {
                path: "mycollege",
                element:<PrivateRoute> <MyCollege></MyCollege></PrivateRoute>
            }
        ]
    },
]);
