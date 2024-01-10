import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
    reducerPath: "blogApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1/blogs",
    }),

    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `?page=${pageNumber}&size=${pageSize}`,
                method: "GET",
            }),
        }),
        deleteBlog: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `?page=${pageNumber}&size=${pageSize}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllBlogsQuery } = blogApi;
