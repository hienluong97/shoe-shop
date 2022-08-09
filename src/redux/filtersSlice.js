import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        brand: [''],
        size: [''],
        color: [''],
    },
    reducers: {
        addFilterBrand: (state, action) => {
            return { ...state, brand: action.payload };
        },
        removeFilterBrand: (state, action) => {
            return { ...state, brand: action.payload };
        },
    },
});

export const { brandChange, sizeChange, colorChange } = filtersSlice.actions;
export default filtersSlice.reducer;
