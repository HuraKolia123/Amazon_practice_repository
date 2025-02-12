import { rapidAPI } from "@/shared/api/rapidAPI";
import {
  GetProductCategoryItemRequest,
  GetProductCategoryItemResponse,
} from "../model/types/productCategoryListAPI";

const categoryItemAPI = rapidAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryItems: builder.query<
      GetProductCategoryItemResponse,
      GetProductCategoryItemRequest
    >({
      query: (data) => ({
        url: "/product-category-list",
        method: "GET",
        params: { ...data },
      }),
    }),
  }),
});

export const { useGetCategoryItemsQuery } = categoryItemAPI;
