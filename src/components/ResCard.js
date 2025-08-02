const ResCard = ({resInfo}) => {
    return (<div className="res-card">
        <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/cbcaa9d8-e337-420a-8d76-cb250ec96b4c_741531.jpg" alt="Food" />
        <h2>{resInfo.resname}</h2>
        <p>{resInfo.cuisine}</p>
        <p>Rating: {resInfo.rating}</p>
    </div>)
}
export default ResCard;