// react
import { FC } from "react";
//constants
import { SEARCH_PARAM_KEYS } from "@/shared/libs/constants/searchParams";
//react-router-dom
import { useSearchParams } from "react-router-dom";
//ui
import { ProductSortComponent } from "../ProductSortComponent";
// styles
import styles from "./ProductInfoQueryField.module.scss";

interface ProductInfoQueryFieldProps {}

export const ProductInfoQueryField: FC<ProductInfoQueryFieldProps> = ({}) => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get(SEARCH_PARAM_KEYS.QUERY) || "";

  const total_products = searchParams.get(SEARCH_PARAM_KEYS.TOTAL_PRODUCTS);

  return (
    <div className={styles.ProductInfoQueryField}>
      <div className={styles.goodsInfo}>
        <div>1-16 of over {total_products}</div>
        {!searchQuery ? (
          "goods"
        ) : (
          <div>
            results for
            <span className={styles.queryName}> "{searchQuery}"</span>
          </div>
        )}
      </div>
      <ProductSortComponent />
    </div>
  );
};
