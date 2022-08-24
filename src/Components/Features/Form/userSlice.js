import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import usersApi from '~/API/UsersApi';

export const getMe = createAsyncThunk('user/getUser', async () => {
    const currentUser = await usersApi.getMe();
    return currentUser;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        isLogin: false,
    },
    reducers: {
        logout: (state) => {
            state.isLogin = false;
            state.current = {};
        },
    },
    extraReducers: {
        [getMe.fulfilled]: (state, action) => {
            state.isLogin = true;
            state.current = action.payload;
        },
        [getMe.rejected]: (state, action) => {
            state.isLogin = false;
            state.current = {};
        },
    },
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default userSlice;
