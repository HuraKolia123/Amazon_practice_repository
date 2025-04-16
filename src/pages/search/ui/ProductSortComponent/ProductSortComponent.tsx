// react
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
//redux
import { getProductSortBy } from "../../model/selectors";
import { useDispatch, useSelector } from "react-redux";
import { productPageActions } from "../../model/slice";
// constants
import { sortArray } from "../../libs/constants";
import { SEARCH_PARAM_KEYS } from "@/shared/libs/constants/searchParams";
//ui
import { Select } from "@/widgets/select";
//types
import { SortByType } from "@/shared/libs/types/sortBy";
import { isSortByType } from "@/shared/libs/helpers/typeGuards/isSortByType";
// styles
import styles from "./ProductSortComponent.module.scss";

interface ProductSortComponentProps {}

export const ProductSortComponent: FC<ProductSortComponentProps> = ({}) => {
  const dispatch = useDispatch();

  const selectedOption = useSelector(getProductSortBy);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortQuery = searchParams.get("sort_by") || "";

  if (sortQuery && !selectedOption && isSortByType(sortQuery)) {
    dispatch(productPageActions.setSortBy(sortQuery));
  }

  const onOptionSelectChange = (option: SortByType) => {
    dispatch(productPageActions.setSortBy(option));
    setSearchParams((prev) => {
      prev.set(SEARCH_PARAM_KEYS.SORT_BY, option);

      return prev;
    });
  };

  return (
    <div className={styles.ProductSortComponent}>
      <Select
        options={sortArray}
        selectedOption={selectedOption}
        // @ts-ignore
        setSelectedOption={onOptionSelectChange}
      />
    </div>
  );
};
