// create a redux store to manage the state of the cart

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;