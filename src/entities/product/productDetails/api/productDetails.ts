import { rapidAPI } from "@/shared/api";
import {
  GetDetailsOfProductsRequest,
  GetDetailsOfProductsResponse,
} from "../model/datailsAPI";

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
