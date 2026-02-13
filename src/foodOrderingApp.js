// HEADER
// --logo
// --menu
// BODY
// - search
// - restuarant container
// - restaurant card
//      -name,star rating, price, cuisine, delivery time
// FOOTER
// -link
// -Address
// -copyright
// -contact

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// chunking and code splitting
// dynamic loading
// on demand loading
// lazy loading
// when we load the app, we dont want to load the code for grocery because it is not required at that time, we will load it when user clicks on grocery link

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1 className="about-container">Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    },


]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
