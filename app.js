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


const App = () => {
  return (
    <div className="app">
      <Header/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
