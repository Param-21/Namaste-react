import { LOGO_URL } from "../utils/constants";
import  {useState} from "react";

export const Header = () =>{
    const[btnNameReact,setBtnNameReact] = useState("Login");
    console.log("Header Rendered!");
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src={LOGO_URL}
                />
                <li>Home</li>
            </div>
         <div className="nav-items">
            <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>  
                <button className="login" 
                onClick={() =>{
                    setBtnNameReact("Logout");
                }}
                >
                {btnNameReact}
                </button>
            </ul>
         </div>
        </div>
    );
};
