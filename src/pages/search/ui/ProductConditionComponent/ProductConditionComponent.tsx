// react
import { FC } from "react";
import styles from "./ProductConditionComponent.module.scss";
//types
import { ProductConditionType } from "@/shared/libs/types/product_condition";
import { isConditionByType } from "@/shared/libs/helpers/typeGuards/isProductConditionsByType";
//ui
import { FilterSection } from "@/widgets/filterSection";
//constants
import { conditionsArray } from "../../libs/constants";
// styles
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_KEYS } from "@/shared/libs/constants/searchParams";

interface ProductConditionComponentProps {}

export const ProductConditionComponent: FC<
  ProductConditionComponentProps
> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const conditionQuery = searchParams.get(
    SEARCH_PARAM_KEYS.PRODUCT_CONDITION
  ) as ProductConditionType;

  const selectedCondition: ProductConditionType = isConditionByType(
    conditionQuery
  )
    ? conditionQuery
    : "ALL";

  const onConditionChange = (condition: ProductConditionType) => {
    setSearchParams((prev) => {
      prev.set(SEARCH_PARAM_KEYS.PRODUCT_CONDITION, condition);
      return prev;
    });
  };

  return (
    <div className={styles.ProductConditionComponent}>
      <FilterSection
        title="Condition"
        sectionItems={conditionsArray}
        selectedSectionItem={selectedCondition}
        //@ts-ignore
        selectSectionItem={onConditionChange}
      />
    </div>
  );
};
