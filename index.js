import React from "react";
import ReactDOM from "react-dom/client";
const foodlogo = new URL("./assets/food-logo.jpg",import.meta.url);
const Header = () => {
    return (<div className="header">
        <div className="logo-container">
            <img
            className="logo" src={foodlogo}
            />
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
const ResCard = (props) => {
    return (<div className="res-card">
        <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/cbcaa9d8-e337-420a-8d76-cb250ec96b4c_741531.jpg" alt="Food" />
        <h2>{props.resname}</h2>
        <p>Location</p>
    </div>)
}
const Body = () =>{
    return (<div>
        <div className="search-container"> Search</div>
        <div className="res-container">
            <ResCard resname="Meghna Foods"/>
            <ResCard resname="Another Restaurant"/>
        </div>
    </div>)
}
const AppLayout = () => {
    return (<div className="app">
        <Header/>
        <Body/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
