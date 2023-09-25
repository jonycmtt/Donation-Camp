import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import SingleDonationCard from "../SingleDonationCard/SingleDonationCard";

const route = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorElement></ErrorElement>,

        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/donation.json')
            },
            {
                path : '/donation',
                element : <Donation></Donation>,
            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>,
            },
            {
                path : '/donationCard/:id',
                element : <SingleDonationCard></SingleDonationCard>,
                loader : () => fetch('/donation.json')
            }
            
        ]
    }
])

export default route;