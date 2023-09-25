import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";

const route = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorElement></ErrorElement>,

        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('donation.json')
            }
        ]
    }
])

export default route;