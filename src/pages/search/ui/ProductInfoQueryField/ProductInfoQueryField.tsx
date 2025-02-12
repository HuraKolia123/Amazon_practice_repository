// react
import { FC } from "react";
// styles
import styles from "./ProductInfoQueryField.module.scss";
import { ProductSortComponent } from "../ProductSortComponent";
import { useSelector } from "react-redux";
import { getTotalProducts } from "../../model/selectors";

interface ProductInfoQueryFieldProps {
  queryName: string;
}

export const ProductInfoQueryField: FC<ProductInfoQueryFieldProps> = ({
  queryName,
}) => {
  const total_products = useSelector(getTotalProducts);

  return (
    <div className={styles.ProductInfoQueryField}>
      <div className={styles.goodsInfo}>
        1-16 of over {total_products} results for
        <span className={styles.queryName}> "{queryName}"</span>
      </div>
      <ProductSortComponent />
    </div>
  );
};
