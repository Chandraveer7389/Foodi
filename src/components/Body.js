import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmers from "./Shimmers";
import { Link } from "react-router-dom";
import useCard from "../utils/useCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [filterItems, setFilterItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const listItems = useCard();
  useEffect(() => {
    setFilterItems(listItems);
  }, [listItems]);
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like u are Offline</h1>
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
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResCard resInfo={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
