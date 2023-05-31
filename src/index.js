import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantCard from './components/RestaurantCard';
import userContext from "./utils/userContext";
import { Provider } from 'react-redux';
import store from "./utils/store";
import Cart from "./components/Cart";


const AppLayout = () => {
    const [user, setUser] = useState({
        name: "sachin yadav",
        email: "sachinyadav@gmail.com",

    })
    return (

        <Provider store={store}>
            <userContext.Provider value={{ user: user }}>
                <Navbar />
                {<Outlet />}
                <Footer />
            </userContext.Provider>
        </Provider>

    )
}
const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }, {
                path: "/about",
                element: <About />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantCard />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],

    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />);