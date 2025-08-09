import { useEffect, useState } from "react";
import Shimmers from "./Shimmers";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
     const response = await fetch(
      `https://cors.eu.org/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    setResInfo(json.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // const {name } = resInfo?.cards[2]?.card?.card?.info;

  return resInfo === null ? (
    <Shimmers />
  ) : (
    <div className="menu-container">
      <h1>{resInfo.cards[2].card.card.info.name}</h1>
      <p>res menu</p>
    </div>
  );
};
export default ResMenu;
