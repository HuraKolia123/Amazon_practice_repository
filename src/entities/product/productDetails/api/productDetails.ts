//api
import { rapidAPI } from "@/shared/api";
// query types
import {
  GetDetailsOfProductsRequest,
  GetDetailsOfProductsResponse,
} from "../model/detailsAPI";

const productDetails = rapidAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails: builder.query<
      GetDetailsOfProductsResponse,
      GetDetailsOfProductsRequest
    >({
      query: (data) => ({
        url: `/product-details?asin=${data.asin}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductDetailsQuery } = productDetails;
