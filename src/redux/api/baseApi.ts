import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://django-dev.aakscience.com" }),
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => ({
        url: "/candidate_test/fronted",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetStatisticsQuery } = baseApi;
