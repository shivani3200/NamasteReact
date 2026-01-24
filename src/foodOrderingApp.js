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

import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
