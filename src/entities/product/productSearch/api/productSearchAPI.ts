//api
import { rapidAPI } from "@/shared/api/rapidAPI";
//types
import {
  GetProductSearchItemResponse,
  GetProductSearchItemRequest,
} from "../model/productAPI";
import { buildUrlWithSearchParams } from "@/shared/libs/utils/buildUrlWithSearchParams";

const productSearchAPI = rapidAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProductSearchItems: builder.query<
      GetProductSearchItemResponse,
      GetProductSearchItemRequest
    >({
      query: (data) => ({
        url: buildUrlWithSearchParams("/search", {
          ...data,
        } as GetProductSearchItemRequest),
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductSearchItemsQuery } = productSearchAPI;
