import { useState, useEffect } from "react";
const useCard = () => {
  const [listItems, setListItems] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7271012&lng=88.39528609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );

    const json = await response.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListItems(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return listItems;
};

export default useCard;
