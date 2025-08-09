import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmers from "./Shimmers";
import { Link } from "react-router-dom";

const Body = () => {
  let [listItems, setListItems] = useState([]);
  let [filterItems, setFilterItems] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
  const response = await fetch(
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7271012&lng=88.39528609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
  );
  
 
  const json = await response.json();

  const restaurants =
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setListItems(restaurants);
  setFilterItems(restaurants);
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
          <Link  key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><ResCard  resInfo={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
