import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageType: null,
};

export const pageTypeSlice = createSlice({
    name: "pageType",
    initialState,
    reducers: {
        setPageTypeLogin: (state) => {
            state.pageType = "login";
        },
        setPageTypeRegister: (state) => {
            state.pageType = "register";
        },
    },
});

export const { setPageTypeLogin, setPageTypeRegister } = pageTypeSlice.actions;
export default pageTypeSlice.reducer;
