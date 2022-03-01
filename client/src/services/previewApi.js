import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const previewApi = createApi({
  reducerPath: "previewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    getPreview: build.query({
      query: () => `api/preview`,
    }),
  }),
});

export const { useGetPreviewQuery } = previewApi;
