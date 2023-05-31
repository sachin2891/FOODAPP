import IMG_URL_CDN from "../config"
const Card = ({ name, cloudinaryImageId, cuisines, id, avgRating, areaName, sla }) => {
    return (
        <div className='w-56 p-2 m-2 bg-slate-50 shadow-lg' >

            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} alt="image" />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{id}</h3>
            <h3>{areaName}</h3>
            <h3 className="cuisines">{cuisines?.slice(1, 5).join(",")}</h3>
            <div className="flex ">

                <h4 className="m-2">{(avgRating > 0 ? avgRating : 0)} stars</h4>
                <h4 className="m-2 "> {sla?.deliveryTime} Mins</h4>
            </div>


        </div>)

}
export default Card;