import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: (id) => `api/category/${id}`,
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
