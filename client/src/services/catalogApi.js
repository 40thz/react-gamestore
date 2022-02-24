import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    getCatalog: build.query({
      query: () => `api/catalog`,
    }),
  }),
});

export const { useGetCatalogQuery } = catalogApi;
