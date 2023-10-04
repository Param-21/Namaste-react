import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"; //named  export and import 
import Body from "./components/Body";///defaullt import and export

const AppLayout = () =>{
    return <div class = "app">
        <Header/>
        <Body/>
    </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);