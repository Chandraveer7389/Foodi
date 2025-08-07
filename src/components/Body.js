import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmers from "./Shimmers";

const Body = () => {
  let [listItems, setListItems] = useState([]);
  let [filterItems, setFilterItems] = useState([]);
  
  const [searchText, setSearchText] = useState("");
  
  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const json = await data.json();
    const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

  setListItems(restaurants);
  setFilterItems(listItems);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (listItems.length === 0) {
    return <Shimmers />;
  }
  return (
    <div>
      <div className="btn-container">
        <input
          type="text"
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="Search-Btn"
          onClick={() => {
            
            let searchResult = listItems.filter((item) => {
              return item.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilterItems(searchResult);
          }}
        >
          Search
        </button>
        <button
          className="btn"
          onClick={() => {
            const topRated = listItems.filter((items) => {
              return items.info.avgRating > 4.2;
            });
            setFilterItems(topRated);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filterItems.map((restaurant) => (
          <ResCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
