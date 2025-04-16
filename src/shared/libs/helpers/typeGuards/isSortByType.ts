import { SortByType } from "../../types/sortBy";

const sortByValues: SortByType[] = [
  "",
  "RELEVANCE",
  "LOWEST_PRICE",
  "HIGHEST_PRICE",
  "REVIEWS",
  "NEWEST",
  "BEST_SELLERS",
];

export const isSortByType = (value: string): value is SortByType => {
  return sortByValues.includes(value as SortByType);
};
