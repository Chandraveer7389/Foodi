import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
    return (<div className="header">
        <div className="logo-container">
            <img
            className="logo" src="/food-logo.jpg"
            style={{ width: "200px", height: "auto", border: "2px solid red" }}/>
        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Contact Us</li>
            <li>About</li>
        </ul>
        </div>
    </div>)
}


const AppLayout = () => {
    return (<div className="app">
        <Header/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
