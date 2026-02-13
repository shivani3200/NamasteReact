import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div
      className="res-card p-2 bg-white rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={IMG_CDN_URL + resData.info.cloudinaryImageId}
        alt={resData.info.name}
      />
      <h3 className="text-lg font-semibold text-blue-800 mt-2"> {resData.info.name}</h3>
      <h5 className="text-sm text-gray-500">{resData.info.cuisines.join(" | ")}</h5>
         <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-600 font-medium">
                    ⭐ {resData.info.avgRating}
                </span>

                <span className="text-sm text-gray-500">
                    {resData.info.sla.deliveryTime} mins
                </span>
            </div>
      <h4 className="mt-1 text-sm text-gray-600">{resData.info.costForTwo}</h4>
      <h6 className="text-sm text-gray-400">{resData.info.areaName}</h6>
    </div>
  );
};

// Higher order restaurant - HOC for promoted restaurant card
// This HOC takes a RestaurantCard component and returns a new component that adds a "Promoted" label to it.
export const PromotedRestaurant =(RestaurantCard)=>{
  return (props) =>{
    return(
      <div className="relative" >
        <RestaurantCard {...props}/>
        <label className="promoted-label absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Promoted</label>
      </div>
    )
  }

}
export default RestaurantCard;
