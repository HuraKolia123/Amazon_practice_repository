import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductPageStateSchema } from "../types/productPage";

const initialState: ProductPageStateSchema = {
  page: 1,
  sort_by: "",
  product_condition: "ALL",
  deals_and_discounts: "NONE",
  min_price: 1,
  max_price: 500000,
  category_id: "",
  total_products: 0,
};

const productPageSlice = createSlice({
  name: "productPageSlice",
  initialState: initialState,
  reducers: {
    setPage: (state, action: PayloadAction<ProductPageStateSchema["page"]>) => {
      state.page = action.payload;
    },
    setSortBy: (
      state,
      action: PayloadAction<ProductPageStateSchema["sort_by"]>
    ) => {
      state.sort_by = action.payload;
    },
    setConditions: (
      state,
      action: PayloadAction<ProductPageStateSchema["product_condition"]>
    ) => {
      state.product_condition = action.payload;
    },
    setDealsAndDiscounts: (
      state,
      action: PayloadAction<ProductPageStateSchema["deals_and_discounts"]>
    ) => {
      state.deals_and_discounts = action.payload;
    },
    setMinPrice: (
      state,
      action: PayloadAction<ProductPageStateSchema["min_price"]>
    ) => {
      state.min_price = action.payload;
    },
    setMaxPrice: (
      state,
      action: PayloadAction<ProductPageStateSchema["max_price"]>
    ) => {
      state.max_price = action.payload;
    },
    setCategory: (
      state,
      action: PayloadAction<ProductPageStateSchema["category_id"]>
    ) => {
      state.category_id = action.payload;
    },
    setTotalProducts: (
      state,
      action: PayloadAction<ProductPageStateSchema["total_products"]>
    ) => {
      state.total_products = action.payload;
    },
  },
});

export const { actions: productPageActions, reducer: productPageReducer } =
  productPageSlice;
