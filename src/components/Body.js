import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// normal js variable
// let listOfRestaurants = [
//     {
//         info: {
//             id: "48220",
//             name: "Kanti Sweets",
//             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/5caf865c-4842-48fa-b155-f93478373943_48220.jpg",
//             locality: "Bellandur Main Rd",
//             areaName: "Bellandur New",
//             costForTwo: "₹150 for two",
//             cuisines: [
//                 "Sweets"
//             ],
//             avgRating: 4.6,
//             sla: {
//                 deliveryTime: 18,
//             }
//         }
//     },
//     {
//         info: {
//             id: "48210",
//             name: " KFC",
//             cloudinaryImageId: "b61937637b1066762d041c3f479e6ee6",
//             locality: "Bellandur Main Rd",
//             areaName: "Bellandur New",
//             costForTwo: "₹150 for two",
//             cuisines: [
//                 "bread"
//             ],
//             avgRating: 3.2,
//             sla: {
//                 deliveryTime: 18,
//             }
//         }
//     }
//     ,
//     {
//         info: {
//             id: "48228",
//             name: "Meghana Foods",
//             cloudinaryImageId: "ypmscb0ejbkzvbxgmoza",
//             locality: "Bellandur Main Rd",
//             areaName: "Bellandur New",
//             costForTwo: "₹150 for two",
//             cuisines: [
//                 "Biryani"
//             ],
//             avgRating: 4.9,
//             sla: {
//                 deliveryTime: 18,
//             }
//         }
//     }
//     , {
//         info: {
//             id: "48229",
//             name: "Dominos",
//             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/4d240b9b-d54a-49a1-982b-12c88f65fe3c_487717.JPG",
//             locality: "Bellandur Main Rd",
//             areaName: "Bellandur New",
//             costForTwo: "₹150 for two",
//             cuisines: [
//                 "Pizza"
//             ],
//             avgRating: 3.9,
//             sla: {
//                 deliveryTime: 18,
//             }
//         }
//     }

// ]

const Body = () => {
  //local state variable - super powerful variable
  //     const [listOfRestaurants, setListOfRestaurants] = useState([
  //     {
  //         info: {
  //             id: "48220",
  //             name: "Kanti Sweets",
  //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/5caf865c-4842-48fa-b155-f93478373943_48220.jpg",
  //             locality: "Bellandur Main Rd",
  //             areaName: "Bellandur New",
  //             costForTwo: "₹150 for two",
  //             cuisines: [
  //                 "Sweets"
  //             ],
  //             avgRating: 4.6,
  //             sla: {
  //                 deliveryTime: 18,
  //             }
  //         }
  //     },
  //     {
  //         info: {
  //             id: "48210",
  //             name: " KFC",
  //             cloudinaryImageId: "b61937637b1066762d041c3f479e6ee6",
  //             locality: "Bellandur Main Rd",
  //             areaName: "Bellandur New",
  //             costForTwo: "₹150 for two",
  //             cuisines: [
  //                 "bread"
  //             ],
  //             avgRating: 3.2,
  //             sla: {
  //                 deliveryTime: 18,
  //             }
  //         }
  //     }
  //     ,
  //     {
  //         info: {
  //             id: "48228",
  //             name: "Meghana Foods",
  //             cloudinaryImageId: "ypmscb0ejbkzvbxgmoza",
  //             locality: "Bellandur Main Rd",
  //             areaName: "Bellandur New",
  //             costForTwo: "₹150 for two",
  //             cuisines: [
  //                 "Biryani"
  //             ],
  //             avgRating: 4.9,
  //             sla: {
  //                 deliveryTime: 18,
  //             }
  //         }
  //     }
  //     , {
  //         info: {
  //             id: "48229",
  //             name: "Dominos",
  //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/4d240b9b-d54a-49a1-982b-12c88f65fe3c_487717.JPG",
  //             locality: "Bellandur Main Rd",
  //             areaName: "Bellandur New",
  //             costForTwo: "₹150 for two",
  //             cuisines: [
  //                 "Pizza"
  //             ],
  //             avgRating: 3.9,
  //             sla: {
  //                 deliveryTime: 18,
  //             }
  //         }
  //     }

  // ]
  // );

  // const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // API call to get the data from server
    // update the state variable - listOfRestaurants
    const data = await fetch(
      "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants",
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  // if(listOfRestaurants.length === 0){
  //     return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 90,
          marginBottom: 20,
        }}
      >
        {/* search */}
        <input
          type="text"
          className="search"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => {
          const filteredList = listOfRestaurants.filter(res =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurants(filteredList);
        }}>Search</button>

        {/* filter */}
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">

        {filteredRestaurants.map((res) => (
          
          // making each restaurant card clickable
          <Link to={"/restaurant/" + res.info.id}
            key={res.info.id}>
            <RestaurantCard key={res.info.id} resData={res} />
          </Link>))}
        ;

      </div>
    </div>
  );
};
export default Body;
