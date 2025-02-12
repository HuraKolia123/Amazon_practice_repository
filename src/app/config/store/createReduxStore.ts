//rtk
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

//types
import { StateSchema } from "./StateSchema";

//api
import { rapidAPI } from "@/shared/api/rapidAPI";
import { productPageReducer } from "@/pages/search/model/slice/productPageSlice";

// reducer

export function createReduxStore() {
  const reducers: ReducersMapObject<StateSchema> = {
    [rapidAPI.reducerPath]: rapidAPI.reducer,
    productPage: productPageReducer,
  };

  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rapidAPI.middleware),
  });
  return store;
}
