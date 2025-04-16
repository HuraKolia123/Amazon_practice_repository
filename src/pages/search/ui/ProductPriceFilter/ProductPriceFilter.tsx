// react
import { FC } from "react";
//react-router-dom
import { useSearchParams } from "react-router-dom";
//constants
import { SEARCH_PARAM_KEYS } from "@/shared/libs/constants/searchParams";
// ui
import { DoubleRangeSlider } from "@/shared/ui/DoubleRangeSlider";
// styles
import styles from "./ProductPriceFilter.module.scss";

interface ProductPriceFilterProps {}

export const ProductPriceFilter: FC<ProductPriceFilterProps> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const minPriceQuery =
    Number(searchParams.get(SEARCH_PARAM_KEYS.MIN_PRICE)) || 100;
  const maxPriceQuery =
    Number(searchParams.get(SEARCH_PARAM_KEYS.MAX_PRICE)) || 50000;

  return (
    <div className={styles.ProductPriceFilter}>
      <DoubleRangeSlider
        minLimit={minPriceQuery}
        maxLimit={maxPriceQuery}
        label="Price"
        onOkButtonClick={({ minValue, maxValue }) => {
          setSearchParams((prev) => {
            prev.set(SEARCH_PARAM_KEYS.MIN_PRICE, String(minValue));
            prev.set(SEARCH_PARAM_KEYS.MAX_PRICE, String(maxValue));
            return prev;
          });
        }}
      />
    </div>
  );
};
