import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IMG_URL_CDN } from '../config';
import Shimmer from './Shimmer';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';


const RestaurantCard = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [otherMenus, setOtherMenus] = useState([]);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)



    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    useEffect(() => {
        getRestaurantInfo(id);
    }, [])
    async function getRestaurantInfo(id) {

        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.232699&lng=72.849922&restaurantId=" + id);
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        const fix = json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.title === "Recommended" ? 1 : 2;
        setOtherMenus(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[fix]?.card?.card?.itemCards);
        setIsLoading(false);
    }
    if (isLoading) {
        return <Shimmer />
    }

    return (
        (<div className='flex justify-between'>
            <div className='w-1/2 p-3'>
                {/* <h1>restaurant details</h1> */}
                <h1 className='font-bold text-3xl mb-4'>{restaurant?.name}</h1>
                <img className='w-1/2 ' src={IMG_URL_CDN + restaurant.cloudinaryImageId} />
                <h3> {id}</h3>
                <h3>{restaurant?.areaName} , {restaurant?.city}</h3>
                <h3>{restaurant?.cuisines?.join(' ,')}</h3>
                <h3>{restaurant?.avgRating} ⭐ </h3>

            </div>

            <div className='w-1/2 p-3'>
                <h1 className='font-bold text-2xl '>Other Menu</h1>
                <ul>
                    {otherMenus.map((otherMenu, index) =>
                    (<li key={index}>{otherMenu?.card?.info?.name}  - <button className='p-1 m-1 bg-slate-200' onClick={() => {
                        handleAddItem(otherMenu?.card?.info);
                    }}>Add</button></li>)
                    )}
                </ul>

            </div>
        </div>)
    )
}

export default RestaurantCard;