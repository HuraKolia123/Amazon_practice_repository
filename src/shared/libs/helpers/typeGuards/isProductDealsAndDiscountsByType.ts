import { ProductDealsAndDiscountsType } from "../../types/deals_and_discounts";

const dealsAndDiscountsByValues: ProductDealsAndDiscountsType[] = [
  "NONE",
  "ALL_DISCOUNTS",
  "TODAYS_DEALS",
];

export const isDealsAndDiscountsByType = (
  value: string
): value is ProductDealsAndDiscountsType => {
  return dealsAndDiscountsByValues.includes(
    value as ProductDealsAndDiscountsType
  );
};
