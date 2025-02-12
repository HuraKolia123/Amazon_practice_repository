import { ProductDealsAndDiscountsType } from "@/shared/libs/types/deals_and_discounts";
import { ProductConditionType } from "@/shared/libs/types/product_condition";
import { SortByType } from "@/shared/libs/types/sortBy";

export interface ProductPageStateSchema {
  page: number;
  sort_by: SortByType;
  product_condition: ProductConditionType;
  deals_and_discounts: ProductDealsAndDiscountsType;
  min_price: number;
  max_price: number;
  category_id: string;
  total_products: number;
}
