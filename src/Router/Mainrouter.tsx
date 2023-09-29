import {createBrowserRouter } from "react-router-dom"
import Layout from "../Components/LayoutHolder/Layout"
import Homescreen from "../Pages/Homescreen"
import Upload from "../Pages/Upload"
import Features from "../Pages/Features"
import About from "../Pages/About"
import Contact from "../Pages/Getstarted"

export const Mainrouter =  createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Homescreen />
                }
            ]
        },
       {
        path : '/upload',
        element: <Upload/>
       }
        
    ]
)