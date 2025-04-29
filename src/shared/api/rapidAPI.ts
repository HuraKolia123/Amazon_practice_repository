import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RAPID_BASE_URL } from "../libs/constants/rapidBaseUrl";
import { productSearchQueryKeys } from "@/entities/product/productSearch/libs/constants/productSearchQueryKeys";

export const rapidAPI = createApi({
  keepUnusedDataFor: 7200,
  reducerPath: "rapidAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: RAPID_BASE_URL,
    headers: {
      "x-rapidapi-key": "6abd275a1cmshddb7e78e901ef72p180a97jsnf4a08e99b438",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  }),
  endpoints: () => ({}),
  tagTypes: [...productSearchQueryKeys.all()],
});

// keys:

// 1) ffdfea2ff3msha6476e7f51419c3p1ee336jsn729f555ab569 - змінив 12.04

// 2) 4adbe08f58mshdfaa3c7645c0e12p17fb68jsn9bf6a7918301 - на момент 4.04 не працював

// 3) c5ce8dfb7bmshd811fff980390cdp14ac02jsn7de4f37c0dfc - змінив 18.04

// 4) 6abd275a1cmshddb7e78e901ef72p180a97jsnf4a08e99b438 - зараз (18.04)
