import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body  = () => {
//Local variable-----> super powerful variable 
    const[listOfRestaurents,setListofRestaurents] = useState(resList); ///this is basically array de-structuring
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