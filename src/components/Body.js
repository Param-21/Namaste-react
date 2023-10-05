import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import shimmer from "./Shimmer";
const Body  = () => {
//Local variable-----> super powerful variable 
    const[listOfRestaurents,setListofRestaurents] = useState(resList); ///this is basically array de-structuring
    
    /*
    useEffect(() => {
        fetchData();

    }, []); //with a callback function and another one is dependency array

const fetchData = async () => {
    const data  = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v6?lat-12.9351929&ing-77.62448069999999&page_type=DESKTOP_WEB_USTING"
        );
        const json = await data.json();
        //Optional Chaining 

        setListofRestaurents(json?.data.cards[2].data?.data?.cards);
};*/

    if (listOfRestaurents.length === 0) {
        return <shimmer/>   
    }
    return(
        <div className="Body">
            <div className="filter">
                <button className="filter-btn" 
                 onClick={() =>{
                   const filteredList = listOfRestaurents.filter(
                    (res) => res.data.avgRating > 4
                   );
                   setListofRestaurents(filteredList);
                }}
               >
                    Top Rated Restaurents!!
                </button>
            </div>
            <div className="res-container">
            {
                listOfRestaurents.map((restaurant) =>(
                    <RestaurentCard key = {restaurant?.data.id} resData = {restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;