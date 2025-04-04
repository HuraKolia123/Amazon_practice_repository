//api
import { mokkyDevAPI } from "@/shared/api";
import { rapidAPI } from "@/shared/api/rapidAPI";
//types
import { UserStateSchema } from "@/entities/user/model/types/userTypes";
import { ProductPageStateSchema } from "@/pages/search/model/types/productPage";

export interface StateSchema {
  [rapidAPI.reducerPath]: ReturnType<typeof rapidAPI.reducer>;
  [mokkyDevAPI.reducerPath]: ReturnType<typeof mokkyDevAPI.reducer>;
  productPage: ProductPageStateSchema;
  user: UserStateSchema;
}
