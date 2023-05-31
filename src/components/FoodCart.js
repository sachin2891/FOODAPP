import React from 'react'

const FoodCart = ({ name, imageId, price, category, description }) => {
    return (
        <div className='w-30 p-2 m-2 bg-slate-100 shadow-lg flex flex-row items-center'>
            <img className='w-20 h-20 mr-2' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + imageId} alt="image" />
            <div>
                <h2 className="font-bold text-ms">{name}</h2>
                <h3 className='text-sm'>Price: {price / 100}</h3>
                <h3>{category}</h3>
                <h3>{description}</h3>
            </div>
        </div>

    )
}
export default FoodCart