import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Components/Features/Cart/cartSlice';
import userSlice from '~/Components/Features/Form/userSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;
