

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {

    const data = await fetch("https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurantMenu/123456");

    const json = await data.json();
    setResInfo(json.data);
  }

  if(resInfo === null){
    return <Shimmer />;
  }

  const {name, cuisines, areaName, locality, avgRating, cloudinaryImageId, costForTwo} = resInfo?.cards[2]?.card?.card?.info || {};

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  return(
    <div style={{ margin: "0 auto", marginTop: "100px", padding: "50px", maxWidth: "600px", textAlign: "center", backgroundColor: "#e6e6fb"}}>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <br/>
      {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt={name} style={{ width: "300px", height: "200px", borderRadius: "10px" }} />
      <br/>
      <p>⭐ {avgRating} | ₹ {costForTwo / 100} for two</p>
      <br/>  */}
      <img src={"https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurantMenu/123456"+{itemCards?.card.info.imageId}} alt={name} style={{ width: "300px", height: "200px", borderRadius: "10px" }} />
      <p>⭐{avgRating}</p>

      <h2 style={{display:"flex", marginTop:70}}>Menu</h2>
      <br/>
      
      <ul >
        {itemCards.map(item => (
          <li key = {item.card.info.id} 
          style={{ 
            marginBottom: "10px", 
            borderBottom: "1px solid #ccc", 
            paddingBottom: "10px" }}
            >

            {item.card.info.name} - ₹{item.card.info.price / 100}
                        <p>{item.card.info.description}</p>
<br/>
          </li>
        ))}
      </ul>
    </div>);
}
export default RestaurantMenu;