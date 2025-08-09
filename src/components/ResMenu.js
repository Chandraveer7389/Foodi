import { useEffect, useState } from "react";
import Shimmers from "./Shimmers";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
 const { resid } = useParams();
  const fetchData = async () => {
    const swiggyURL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7271012&lng=88.39528609999999&restaurantId=" + resid;

    const response = await fetch(swiggyURL);
    const json = await response.json();
    setResInfo(json.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (resInfo === null) {
    return <Shimmers />;
  }
  const { name } = resInfo?.cards[2]?.card?.card?.info;
  const items =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <h2>Restaurant's Menu</h2>
      {items.map((food) => {
        return (
          <div key={food.card.info.id}>
            <p>{food.card.info.name}</p>
            <p>Price Rs:{(food.card.info.price || food.card.info.variantsV2?.pricingModels[0]?.price) / 100}</p>
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};
export default ResMenu;
