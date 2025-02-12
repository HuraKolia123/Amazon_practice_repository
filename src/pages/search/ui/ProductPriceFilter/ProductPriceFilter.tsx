// react
import { FC } from "react";
//redux
import { useDispatch } from "react-redux";
import { productPageActions } from "../../model/slice";
// ui
import { DoubleRangeSlider } from "@/shared/ui/DoubleRangeSlider";
// styles
import styles from "./ProductPriceFilter.module.scss";

interface ProductPriceFilterProps {}

export const ProductPriceFilter: FC<ProductPriceFilterProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.ProductPriceFilter}>
      <DoubleRangeSlider
        minLimit={100}
        maxLimit={50000}
        label="Price"
        onOkButtonClick={({ minValue, maxValue }) => {
          dispatch(productPageActions.setMinPrice(minValue));
          dispatch(productPageActions.setMaxPrice(maxValue));
        }}
      />
    </div>
  );
};
