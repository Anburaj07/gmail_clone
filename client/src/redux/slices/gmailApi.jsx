import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gmailApi = createApi({
  reducerPath: "gmailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/gmails",
  }),
  tagTypes: ["gmails"],
  endpoints: (builder) => ({
    getGmails: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
      providesTags: ["gmails"],
    }),
    getGmailById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["gmails"],
    }),
    addGmail: builder.mutation({
      query: (gmail) => ({
        url: "/add",
        method: "POST",
        body: gmail,
      }),
      invalidatesTags: ["gmails"],
    }),
    editGmail: builder.mutation({
      query: ({ id, ...gmail }) => ({
        url: `update/${id}`,
        method: "PATCH",
        body: gmail,
      }),
      invalidatesTags:["gmails"]
    }),
    deleteGmail: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["gmails"],
    }),
  }),
});

export const {
  useGetGmailsQuery,
  useGetGmailByIdQuery,
  useAddGmailMutation,
  useEditGmailMutation,
  useDeleteGmailMutation,
} = gmailApi;
