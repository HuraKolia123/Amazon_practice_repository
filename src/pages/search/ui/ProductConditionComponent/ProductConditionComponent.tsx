// react
import { FC } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getProductCondition } from "../../model/selectors";
import { productPageActions } from "../../model/slice";
//types
import { ProductConditionType } from "@/shared/libs/types/product_condition";
//ui
import { FilterSection } from "@/widgets/filterSection";
//constants
import { conditionsArray } from "../../libs/constants";
// styles
import styles from "./ProductConditionComponent.module.scss";

interface ProductConditionComponentProps {}

export const ProductConditionComponent: FC<
  ProductConditionComponentProps
> = ({}) => {
  const selectedCondition = useSelector(getProductCondition);

  const dispatch = useDispatch();

  const onConditionChange = (condition: ProductConditionType) => {
    dispatch(productPageActions.setConditions(condition));
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
