import { useEffect, useState } from "react"
import Card from "./Card"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setallRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    useEffect(() => {
        getAllRestaurants();
        // setallRestaurants(foodItems);
        // setfilteredRestaurants(foodItems);

    }, []);
    async function getAllRestaurants() {
        const newData = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.232699&lng=72.849922");
        const json = await newData.json();
        // console.log(json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
        // );
        const restaurants = json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

        setfilteredRestaurants(restaurants);
        setallRestaurants(restaurants);


    }
    function handleRestaurent(text, restaurent) {

        const filterData = restaurent.filter((item) =>
            item.info.name.toLowerCase().includes(text.toLowerCase())
        );
        // console.log(filterData);
        return filterData;
    }
    if (filteredRestaurants?.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="bg-gray-50">
            <input
                placeholder="Search anything"
                className="w-17 p-2 m-2 bg-white hover:border-transparent rounded"
                value={searchText}
                onChange={(e) => { setSearchText(e.target.value) }}
            />
            <button class="bg-white hover:bg-white text-blue-200 font-semibold hover:text-black py-2 px-4 border border-blue-200 hover:border-transparent rounded" onClick={() => {
                const data = handleRestaurent(searchText, allRestaurants);
                setfilteredRestaurants(data);
            }} >Search</button>
            <div className='flex flex-wrap '>
                {
                    filteredRestaurants.map((foodItem, index) => {
                        return (
                            <Link to={"/restaurant/" + foodItem.info.id} key={index}>
                                <div className='relative'>
                                    <Card {...foodItem?.info} index={foodItem.info.id} className='bg-white p-4 rounded-md shadow-md' />
                                    <div className='absolute top-0 left-0 w-full h-full  rounded-md shadow-xl opacity-0 hover:opacity-100 transition-opacity duration-300' />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Body;