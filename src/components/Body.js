import ResCard from "./ResCard";
import { useState } from "react";

const Body = () => {
  let [listItems, setListItems] = useState([
    {
      id: "1",
      resname: "Meghna Foods",
      cuisine: "Biryani, North Indian, Asian",
      rating: 4.4,
    },
    {
      id: "2",
      resname: "KFC",
      cuisine: "Burgers, Fast Food",
      rating: 4.1,
    },
    {
      id: "3",
      resname: "Domino's Pizza",
      cuisine: "Pizza, Italian, Pasta",
      rating: 3.9,
    },
  ]);
  return (
    <div>
      <div className="btn-container">
        <button className="btn" onClick={() =>{
            const topRated = listItems.filter((items) => {
                return items.rating > 4;
            })
            setListItems(topRated)
        }}>Top Rated restaurant</button>
      </div>
      <div className="search-container"> Search</div>
      <div className="res-container">
        {listItems.map((restaurant) => (
            <ResCard key={restaurant.id} resInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
