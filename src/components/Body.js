import ResCard from "./ResCard";
import { useEffect, useState } from "react";

const Body = () => {
  let [listItems, setListItems] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api");
    const json = await data.json();
    console.log(json);
    setListItems(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  useEffect(() => {
    fetchData()
  },[]);

  return (
    <div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            const topRated = listItems.filter((items) => {
              return items.rating > 4.0;
            });
            setListItems(topRated);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="search-container"> Search</div>
      <div className="res-container">
        {listItems.map((restaurant) => (
          <ResCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
