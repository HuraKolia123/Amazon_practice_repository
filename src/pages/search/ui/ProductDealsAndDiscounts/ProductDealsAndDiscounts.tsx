// react
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
//types
import { ProductDealsAndDiscountsType } from "@/shared/libs/types/deals_and_discounts";
import { isDealsAndDiscountsByType } from "@/shared/libs/helpers/typeGuards/isProductDealsAndDiscountsByType";
//constants
import { dealsAndDiscountsArray } from "../../libs/constants";
//ui
import { FilterSection } from "@/widgets/filterSection";
// styles
import styles from "./ProductDealsAndDiscounts.module.scss";
import { SEARCH_PARAM_KEYS } from "@/shared/libs/constants/searchParams";

interface ProductDealsAndDiscountsProps {}

export const ProductDealsAndDiscounts: FC<
  ProductDealsAndDiscountsProps
> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dealsAndDiscQuery = searchParams.get(
    SEARCH_PARAM_KEYS.DEALS_AND_DISCOUNTS
  ) as ProductDealsAndDiscountsType;

  const selectedDeals: ProductDealsAndDiscountsType = isDealsAndDiscountsByType(
    dealsAndDiscQuery
  )
    ? dealsAndDiscQuery
    : "NONE";

  const onSelectDealsChange = (deal: ProductDealsAndDiscountsType) => {
    setSearchParams((prev) => {
      prev.set(SEARCH_PARAM_KEYS.DEALS_AND_DISCOUNTS, deal);
      return prev;
    });
  };

  return (
    <div className={styles.ProductDealsAndDiscounts}>
      <FilterSection
        sectionItems={dealsAndDiscountsArray}
        //@ts-ignore
        selectSectionItem={onSelectDealsChange}
        selectedSectionItem={selectedDeals}
        title="Deals & Discounts"
      />
    </div>
  );
};
