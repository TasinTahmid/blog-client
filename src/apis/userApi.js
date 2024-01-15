import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1/users",
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUserBlogs: builder.query({
            query: ({ id, pageNumber, pageSize }) => ({
                url: `/${id}/blogs?page=${pageNumber}&size=${pageSize}`,
                method: "GET",
            }),
            providesTags: ["User"],
        }),
        createUser: builder.mutation({
            query: ({ body }) => ({
                url: `/`,
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useGetUserBlogsQuery, useCreateUserMutation } = userApi;
