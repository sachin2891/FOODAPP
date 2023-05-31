const foodItems = [
    {
        name: "Biryani",
        hotel: "Paradise",
        cuisines: ["Hyderabadi", "Mughlai"],
        price: 250,
        star: 4.5,
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        city: "Hyderabad",
        distance: "10 km"
    },
    {
        name: "Pizza",
        hotel: "Dominos",
        cuisines: ["Italian"],
        price: 300,
        star: 4,
        image: "https://pluspng.com/img-png/png-hd-pizza-pizza-png-3505.png",
        city: "Mumbai",
        distance: "5 km"
    },
    {
        name: "Burger",
        hotel: "McDonald's",
        cuisines: ["American", "Fast Food"],
        price: 150,
        star: 3.5,
        image: "http://www.corvallisadvocate.com/wp-content/uploads/2013/06/big-burger.jpg",
        city: "Delhi",
        distance: "2 km"
    },
    {
        name: "Sushi",
        hotel: "Nobu",
        cuisines: ["Japanese"],
        price: 600,
        star: 4.8,
        image: "https://www.readersdigest.ca/wp-content/uploads/2011/11/japanese-sushi-rolls-scaled.jpg",
        city: "New York",
        distance: "2 miles"
    },
    {
        name: "Tacos",
        hotel: "Taco Bell",
        cuisines: ["Mexican", "Fast Food"],
        price: 200,
        star: 3.2,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VA1UeoVHZ1zFTD3qS49EJAHaEo%26pid%3DApi&f=1&ipt=8b88ff1e3be2de1259ef2a6f3e51847285cca4b105c160432ecb11aafc3ae522&ipo=images",
        city: "Los Angeles",
        distance: "5 miles"
    },

];
const RESTAURENT_CDN = "https://www.swiggy.com/mapi/homepage/getCards?lat=19.232699&lng=72.849922";
export const IMG_URL_CDN = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"
export default foodItems;