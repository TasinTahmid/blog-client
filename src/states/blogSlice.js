import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogList: [],
    userBlogList: [],
    pageNumber: 1,
    allBlogCount: 0,
    userBlogCount: 0,
};

export const blogSlice = createSlice({
    name: "blogListTypes",
    initialState,
    reducers: {
        setPageNumber: (state, action) => {
            console.log("page no.", action.payload);
            state.pageNumber = action.payload;
        },
        setBlogs: (state, action) => {
            state.blogList = action.payload;
        },
        setUserBlogs: (state, action) => {
            state.userBlogList = action.payload;
        },
        addNewBlog: (state, action) => {
            state.blogList.splice(0, 0, action.payload);
            state.userBlogList.splice(0, 0, action.payload);
            console.log("In add new blog", state.blogList);
        },
        updateBlogById: (state, action) => {
            state.blogList = state.blogList.map((blog) => {
                if (action.payload.id != blog.id) return blog;
                return action.payload;
            });
            state.userBlogList = state.userBlogList.map((blog) => {
                console.log("in userBloglist");
                if (action.payload.id != blog.id) return blog;
                return action.payload;
            });
        },
        deleteBlogById: (state, action) => {
            console.log("entered in delet blog,", action.payload);
            state.blogList = state.blogList.filter(
                (blog) => action.payload != blog.id
            );
            state.userBlogList = state.userBlogList.filter(
                (blog) => action.payload != blog.id
            );
        },
    },
});

export const {
    setPageNumber,
    setBlogs,
    setUserBlogs,
    addNewBlog,
    updateBlogById,
    deleteBlogById,
} = blogSlice.actions;

export default blogSlice.reducer;
