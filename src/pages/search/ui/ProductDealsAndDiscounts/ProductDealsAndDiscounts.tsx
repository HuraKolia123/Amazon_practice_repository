// react
import { FC } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getProductDealsAndDiscounts } from "../../model/selectors";
import { productPageActions } from "../../model/slice";
//types
import { ProductDealsAndDiscountsType } from "@/shared/libs/types/deals_and_discounts";
//constants
import { dealsAndDiscountsArray } from "../../libs/constants";
//ui
import { FilterSection } from "@/widgets/filterSection";
// styles
import styles from "./ProductDealsAndDiscounts.module.scss";

interface ProductDealsAndDiscountsProps {}

export const ProductDealsAndDiscounts: FC<
  ProductDealsAndDiscountsProps
> = ({}) => {
  const selectedDeal = useSelector(getProductDealsAndDiscounts);

  const dispatch = useDispatch();

  const onSelectDealsChange = (deal: ProductDealsAndDiscountsType) => {
    dispatch(productPageActions.setDealsAndDiscounts(deal));
  };

  return (
    <div className={styles.ProductDealsAndDiscounts}>
      <FilterSection
        sectionItems={dealsAndDiscountsArray}
        //@ts-ignore
        selectSectionItem={onSelectDealsChange}
        selectedSectionItem={selectedDeal}
        title="Deals & Discounts"
      />
    </div>
  );
};
