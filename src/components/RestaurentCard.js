import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) =>{
    const{resData} = props;

    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime} = resData?.data;
    return(
        <div className="res-card" style={{backgroundColor: "white"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}Stars</h4>
            <h4>Cost for two:{costForTwo/100}</h4>
            <h4>{deliveryTime}mins</h4>
        </div>
    );
};

export default RestaurentCard;