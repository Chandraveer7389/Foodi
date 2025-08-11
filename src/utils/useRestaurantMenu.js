import { useEffect,useState } from "react";

const useRestaurantMenu = (resid) => {
    const [resInfo,setResInfo] = useState(null)
    const fetchData = async () => {
        const swiggyURL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7271012&lng=88.39528609999999&restaurantId=" + resid;

    const response = await fetch(swiggyURL);
    const json = await response.json();
    setResInfo(json.data);
    }

    useEffect(() =>{
        fetchData();
    },[])

    return resInfo;
}

export default useRestaurantMenu
