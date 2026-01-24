import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card">
            <img src={IMG_CDN_URL + resData.info.cloudinaryImageId} alt={resData.info.name}/>
            <h3 style={{ color: "blue" }}> {resData.info.name}</h3>
            <h5>{resData.info.cuisines.join(" | ")}</h5>
            <h6>delivery : {resData.info.sla.deliveryTime} minutes</h6>
            <h4 style={{ color: "brown" }}>{resData.info.avgRating} Stars</h4>
            <h4>{resData.info.costForTwo}</h4>
           <h6>{resData.info.areaName}</h6>

        </div>
    );
}
 export default RestaurantCard;