/**
 * 
 * 
 * 
 * 
 *  <div id = "parent">
 *          <div id = "child">  
 *          </div>
 * </div>
 * 
 * React(Object)=> browser understands
 */

const parent = React.createElement(
    "div",
    {id:"parent"},
    
    React.createElement("div",{id:"child"}, [
        React.createElement("h1",{},"I am an H1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),

    React.createElement("div",{id:"child2"}, [
        React.createElement("h1",{},"I am an H1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),
);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);