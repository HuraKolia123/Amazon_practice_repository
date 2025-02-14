import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RAPID_BASE_URL } from "../libs/constants/rapidBaseUrl";
import { productSearchQueryKeys } from "@/entities/product/productSearch/libs/constants/productSearchQueryKeys";

export const rapidAPI = createApi({
  keepUnusedDataFor: 7200,
  reducerPath: "rapidAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: RAPID_BASE_URL,
    headers: {
      "x-rapidapi-key": "4adbe08f58mshdfaa3c7645c0e12p17fb68jsn9bf6a7918301",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  }),
  endpoints: () => ({}),
  tagTypes: [...productSearchQueryKeys.all()],
});
