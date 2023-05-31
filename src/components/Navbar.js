import { useContext } from "react";
import { Link } from "react-router-dom";
import userDetail from "../utils/userContext";
import { useSelector } from "react-redux";


const Navbar = () => {
    const { user } = useContext(userDetail);

    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);
    return (
        <div className='flex justify-between bg-slate-100 shadow-md'>
            <img src='https://www.ujudebug.com/wp-content/uploads/2020/05/Screenshot_6-300x300.png' alt='foodvilla' className="h-16 p-2 " />

            <ul className='flex py-4'>
                <li className="px-2">
                    <Link to='/'>  Home
                    </Link>
                </li>
                <li className="px-2">
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li className="px-2">
                    <Link to='/contact'>
                        Contact
                    </Link>

                </li>
                <li className="px-2">Support</li>
                <li className="px-2">
                    <Link to='/cart'>
                        Cart {cartItems.length} Items
                    </Link>
                </li>
            </ul>
            <h1 className="p-5">{user.name.split(" ")[0]}</h1>
            {/* <h2>{cartItems[0]}</h2> */}

        </div>
    )

}
export default Navbar;