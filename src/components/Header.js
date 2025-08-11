const foodlogo = new URL("../../assets/food-logo.jpg",import.meta.url);
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnState,setBtnState] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (<div className="header">
        <div className="logo-container">
            <img
            className="logo" src={foodlogo}
            />
        </div>
        <div className="nav-items">
        <ul> <li>{(onlineStatus)? "Online" : "Offline"}</li>
            <li><Link to="/">Home</Link></li>
            <li>Cart</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
            <button className="btn-login" onClick={()=>{ 
                (btnState === "Login")? setBtnState("Logout"):setBtnState("Login");
            }}>{btnState}</button>
        </ul>
        </div>
    </div>)
}
export default Header;