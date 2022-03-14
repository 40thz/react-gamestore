import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    getProduct: build.query({
      query: (id) => `api/product/${id ? id : ""}`,
    }),
    getProductById: build.query({
      query: (id) => `api/product/byid/${id ? id : ""}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductByIdQuery } = productApi;
