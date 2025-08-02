const foodlogo = new URL("../../assets/food-logo.jpg",import.meta.url);

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
export default Header;