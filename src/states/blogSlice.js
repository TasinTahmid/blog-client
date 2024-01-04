import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogList: [],
    userBlogList: [],
};

export const blogSlice = createSlice({
    name: "blogListTypes",
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogList = action.payload;
        },
        setUserBlogs: (state, action) => {
            state.userBlogList = action.payload;
        },
        updateBlog: (state, action) => {
            state.blogList = action.payload.blogList;
            state.userBlogList = action.payload.userBlogList;
        },
        deleteBlogById: (state, action) => {
            console.log("entered in delet blog,", action.payload);
            state.blogList = state.blogList.filter((blog) => action.payload != blog.id);
            state.userBlogList = state.userBlogList.filter((blog) => action.payload != blog.id);
        },
    },
});

export const { setBlogs, setUserBlogs, updateBlog, deleteBlogById } = blogSlice.actions;
export default blogSlice.reducer;
