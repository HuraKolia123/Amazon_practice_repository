import { ProductConditionType } from "../../types/product_condition";

const conditionByValues: ProductConditionType[] = [
  "ALL",
  "NEW",
  "USED",
  "RENEWED",
  "COLLECTIBLE",
];

export const isConditionByType = (
  value: string
): value is ProductConditionType => {
  return conditionByValues.includes(value as ProductConditionType);
};
