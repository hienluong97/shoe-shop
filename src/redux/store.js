import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Components/Features/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export default store;
