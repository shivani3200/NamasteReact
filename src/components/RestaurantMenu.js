

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordion from "./Accordion";


const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, locality, avgRating, cloudinaryImageId, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];
    console.log(categories); // Check the structure of categories

    return (
  <div className="max-w-3xl mx-auto px-6 py-10 mt-40 bg-white rounded-lg shadow-md">

    {/* Restaurant Header */}
    <div className="bg-slate-50 rounded-xl shadow-lg p-6 mb-10 text-white">
      <h1 className="text-3xl font-bold text-gray-800">{name}</h1>

      <p className="text-gray-500 mt-2">{cuisines?.join(", ")}</p>

      <p className="text-gray-400 text-sm">{areaName}</p>

      <img className="w-full h-60 object-cover rounded-lg mt-6"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />

      <div className="flex items-center justify-between gap-4 mt-4 bg-white p-4 rounded-lg shadow-lg">
        <span className="text-red-500  font-medium px-3 py-1 rounded-lg text-sm">⭐ {avgRating}</span>
        <span className="text-gray-600">{costForTwo}</span>
      </div>
    </div>

    {/* Menu Section */}
    {/* <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Menu</h2>
    <div className="space-y-6 ">
      {itemCards?.map((item) => {
        const info = item.card.info;
        return (
          <div key={info.id}
          className="flex justify-between  items-start border-b p-5  bg-white rounded-lg shadow-md">
            <div className="w-3/4">
              <h3 className="font-medium text-lg text-gray-800">{info.name}</h3>

              <p className="text-gray-700 font-medium">
                ₹ {info.price ? info.price / 100 : info.defaultPrice / 100}
              </p>

              <p className="text-sm text-gray-500 mt-2">{info.description}</p>
            </div>

            <button className="bg-red-500 text-white px-4  py-2 my-auto rounded-lg hover:bg-red-600 transition duration-200">Add</button>
          </div>
        );
      })}
    </div> */}


    {/* ACCORDION CATEGORIES */}

    
    {categories.map((category) =>
    <Accordion  key ={category.card?.info.id} data = {category?.card?.card}/>)}

  </div>
);

}
export default RestaurantMenu;