import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FoodCart from './FoodCart';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();
    const handleCart = () => {
        dispatch(clearCart());
    }
    if (cartItems.length === 0) {
        return (

            <h1 className='flex flex-col justify-center items-center min-h-screen text-lg text-bold'>Nothing Is in cart Please add something</h1>

        );
    }

    return (

        <div className=' flex flex-col justify-center items-center min-h-screen'>
            <div className='flex justify-between w-1/2 mb-2 p-3'>
                <h1 className='text-bold text-3xl'>Cart Items ({cartItems.length === 0 ? 0 : cartItems.length})</h1>
                <button
                    class="bg-white hover:bg-white text-blue-200 font-semibold hover:text-black py-2 px-4 border border-blue-200 hover:border-transparent rounded"
                    onClick={() => handleCart()}>
                    Clear cart
                </button>
            </div>
            <div className='w-1/2 flex flex-col justify-center'>
                {cartItems.map((item) => (
                    <FoodCart {...item} key={item.id} />
                ))}
            </div>
        </div>



    )


}

export default Cart