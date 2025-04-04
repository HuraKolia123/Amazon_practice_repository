//rtk
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
//types
import { StateSchema } from "./StateSchema";
//api
import { rapidAPI } from "@/shared/api/rapidAPI";
import { productPageReducer } from "@/pages/search/model/slice/productPageSlice";
import { mokkyDevAPI } from "@/shared/api";
// reducer
import { userReducer } from "@/entities/user";

export function createReduxStore() {
  const reducers: ReducersMapObject<StateSchema> = {
    [rapidAPI.reducerPath]: rapidAPI.reducer,
    [mokkyDevAPI.reducerPath]: mokkyDevAPI.reducer,
    productPage: productPageReducer,
    user: userReducer,
  };

  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        rapidAPI.middleware,
        mokkyDevAPI.middleware
      ),
  });
  return store;
}
