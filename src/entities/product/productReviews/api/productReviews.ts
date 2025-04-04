import { rapidAPI } from "@/shared/api";
import {
  GetReviewsOfProductRequest,
  GetReviewsOfProductResponse,
} from "../model/reviewAPI";

const productReviews = rapidAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProductReviews: builder.query<
      GetReviewsOfProductResponse,
      GetReviewsOfProductRequest
    >({
      query: (data) => ({
        url: `/product-reviews?asin=${data.asin}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductReviewsQuery } = productReviews;
