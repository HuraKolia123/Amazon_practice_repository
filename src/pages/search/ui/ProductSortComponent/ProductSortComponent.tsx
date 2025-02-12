// react
import { FC } from "react";
//redux
import { getProductSortBy } from "../../model/selectors";
import { useDispatch, useSelector } from "react-redux";
import { productPageActions } from "../../model/slice";
// constants
import { sortArray } from "../../libs/constants";
//ui
import { Select } from "@/widgets/select";
//types
import { SortByType } from "@/shared/libs/types/sortBy";

// styles
import styles from "./ProductSortComponent.module.scss";

interface ProductSortComponentProps {}

export const ProductSortComponent: FC<ProductSortComponentProps> = ({}) => {
  const selectedOption = useSelector(getProductSortBy);

  const dispatch = useDispatch();

  const onOptionSelectChange = (option: SortByType) => {
    dispatch(productPageActions.setSortBy(option));
  };

  return (
    <div className={styles.ProductSortComponent}>
      <Select
        options={sortArray}
        selectedOption={selectedOption}
        //@ts-ignore
        setSelectedOption={onOptionSelectChange}
      />
    </div>
  );
};
