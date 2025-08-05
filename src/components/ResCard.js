import {URL_LOGO} from "../utils/constants";

const ResCard = ({resInfo}) => {
    return (<div className="res-card">
        <img className="res-img" src={URL_LOGO + resInfo.cloudinaryImageId} alt="Food" />
        <h2>{resInfo.name}</h2>
        <p>{resInfo.locality}</p>
        <p>{resInfo.cuisines.join(" ,")}</p>
        <p>Rating: {resInfo.avgRating}</p>
    </div>)
}
export default ResCard;