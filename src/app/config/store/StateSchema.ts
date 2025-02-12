import { ProductPageStateSchema } from "@/pages/search/model/types/productPage";
import { rapidAPI } from "@/shared/api/rapidAPI";

export interface StateSchema {
  [rapidAPI.reducerPath]: ReturnType<typeof rapidAPI.reducer>;
  productPage: ProductPageStateSchema;
}
