

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {

    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResInfo(json.data);
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, locality, avgRating, cloudinaryImageId, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  return (
    <div style={{ margin: "0 auto", marginTop: "100px", padding: "50px", maxWidth: "600px", textAlign: "center", backgroundColor: "#e6e6fb" }}>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <br />
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={name} style={{ width: "300px", height: "200px", borderRadius: "10px" }} />
      <p>⭐{avgRating}</p>

      <h2 style={{ display: "flex", marginTop: 70 }}>Menu</h2>
      <br />

      <ul >
        {itemCards.map(item => (
          <li key={item.card.info.id}
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px"
            }}
          >

            {item.card.info.name} - ₹{item.card.info.price / 100}
            <p>{item.card.info.description}</p>
            <br />
          </li>
        ))}
      </ul>
    </div>);
}
export default RestaurantMenu;