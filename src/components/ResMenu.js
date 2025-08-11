
import Shimmers from "./Shimmers";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  if (resInfo === null) {
    return <Shimmers />;
  }
  const { name } = resInfo?.cards[2]?.card?.card?.info;
  const items =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <h2>Restaurant's Menu</h2>
      {items.map((food) => {
        return (
          <div key={food.card.info.id}>
            <p>{food.card.info.name}</p>
            <p>
              Price Rs:
              {(food.card.info.price ||
                food.card.info.variantsV2?.pricingModels[0]?.price) / 100}
            </p>
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};
export default ResMenu;
