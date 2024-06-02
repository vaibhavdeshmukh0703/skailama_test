import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Dashboard from "../Pages/Dashboard/Dashboard";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    }

])