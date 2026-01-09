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

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://tse3.mm.bing.net/th/id/OIP.P1cCo7mFi3Unzh7BD_B4lwHaHa?pid=Api&P=0&h=180" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img src="https://static.vecteezy.com/system/resources/previews/001/899/049/large_2x/close-up-of-milled-rice-in-bowls-free-photo.jpg" />
            <h3 style={{color:"blue"}}>Meghana Foods</h3>
            <h5>Biryani | North Indian</h5>
            <h6>delivery : 20min</h6>
            <h4 style={{color:"brown"}}>4.4 Stars</h4>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />

            </div>
        </div>
    )
}
const Footer =()=>{
    return (
        <div className="footer">
            Copyright@2026
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
