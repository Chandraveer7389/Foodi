const foodlogo = new URL("../../assets/food-logo.jpg",import.meta.url);
import { useState } from "react";
const Header = () => {
    const [btnState,setBtnState] = useState("Login")
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
            <button className="btn-login" onClick={()=>{ 
                (btnState === "Login")? setBtnState("Logout"):setBtnState("Login");
            }}>{btnState}</button>
        </ul>
        </div>
    </div>)
}
export default Header;