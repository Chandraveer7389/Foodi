import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={require("./logo.png")} alt="food-logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  )
}
const Card = () => {
  return (
    <div className="card">
      <img className="card-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="image-of-food"/>
      <h3 className="card-header">Meghna food</h3>
      <p className="card-cuisines">roti, daal and biryani</p>
      <p className="card-rating">4.5</p>
      <p className="card-delivery-time">34 min</p>

    </div>
  )
}
const Body = () => {
  return (<div className="body">
    <div className="search container">Search</div>
    <div className="res-container">
      <Card/>
    </div>
  </div>)
}
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
