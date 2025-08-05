const ResCard = ({resInfo}) => {
    return (<div className="res-card">
        <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resInfo.cloudinaryImageId} alt="Food" />
        <h2>{resInfo.name}</h2>
        <p>{resInfo.locality}</p>
        <p>{resInfo.cuisines.join(" ,")}</p>
        <p>Rating: {resInfo.avgRating}</p>
    </div>)
}
export default ResCard;