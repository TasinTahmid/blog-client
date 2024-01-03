import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogList: [],
    userBlogList: [],
};

export const authSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
