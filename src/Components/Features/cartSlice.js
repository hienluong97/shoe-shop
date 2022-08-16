import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;
            const index = state.findIndex((x) => x.id === product.id);
            if (index >= 0) {
                state[index].quantity += 1;
            } else {
                state.push(product);
            }
        },
        decreItem: (state, action) => {},
        removeItem: (state, action) => {
            const product = action.payload;
            const removeId = product.id;
            state = state.filter((x) => x.id !== removeId);
        },
    },
});
const { actions, reducer } = cartSlice;
export const { addItem, decreItem, removeItem } = actions;
export default cartSlice;
