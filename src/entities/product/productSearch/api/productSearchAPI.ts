//api
import { rapidAPI } from "@/shared/api/rapidAPI";
//types
import {
  GetProductSearchItemResponse,
  GetProductSearchItemRequest,
} from "../model/productAPI";

const productSearchAPI = rapidAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProductSearchItems: builder.query<
      GetProductSearchItemResponse,
      GetProductSearchItemRequest
    >({
      query: (data) => ({
        url: "/search",
        params: {
          ...data,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductSearchItemsQuery } = productSearchAPI;
