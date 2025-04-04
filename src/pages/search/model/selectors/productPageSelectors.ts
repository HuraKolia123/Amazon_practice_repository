import { StateSchema } from "@/app/config/store/StateSchema";

export const getProductPageState = (state: StateSchema) => state.productPage;

export const getProductPage = (state: StateSchema) => state.productPage.page;

export const getProductSortBy = (state: StateSchema) =>
  state.productPage.sort_by;

export const getProductCondition = (state: StateSchema) =>
  state.productPage.product_condition;

export const getProductDealsAndDiscounts = (state: StateSchema) =>
  state.productPage.deals_and_discounts;

export const getProductMinPrice = (state: StateSchema) =>
  state.productPage.min_price;

export const getProductMaxPrice = (state: StateSchema) =>
  state.productPage.max_price;
export const getCategory = (state: StateSchema) =>
  state.productPage.category_id;

export const getTotalProducts = (state: StateSchema) =>
  state.productPage.total_products;

export const getCategoryId = (state: StateSchema) =>
  state.productPage.category_id;
