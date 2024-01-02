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
            console.log("setpageLogin");
        },
        setPageTypeRegister: (state) => {
            state.pageType = "register";
            console.log("setpageRegister");
        },
    },
});

export const { setPageTypeLogin, setPageTypeRegister } = pageTypeSlice.actions;
export default pageTypeSlice.reducer;
