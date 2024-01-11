import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
    reducerPath: "blogApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1/blogs",
    }),
    tagTypes: ["Blog"],
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `?page=${pageNumber}&size=${pageSize}`,
                method: "GET",
            }),
            providesTags: ["Blog"],
        }),
        deleteBlog: builder.mutation({
            query: ({ id, token }) => ({
                url: `/${id}`,
                method: "DELETE",
                headers: { authorization: `Bearer ${token}` },
            }),
        }),
    }),
});

export const { useGetAllBlogsQuery, useDeleteBlogMutation } = blogApi;
