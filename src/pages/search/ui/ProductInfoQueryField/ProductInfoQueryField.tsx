// react
import { FC } from "react";
// styles
import styles from "./ProductInfoQueryField.module.scss";
import { ProductSortComponent } from "../ProductSortComponent";
import { useSelector } from "react-redux";
import { getTotalProducts } from "../../model/selectors";

interface ProductInfoQueryFieldProps {
  searchQuery: string;
}

export const ProductInfoQueryField: FC<ProductInfoQueryFieldProps> = ({
  searchQuery,
}) => {
  const total_products = useSelector(getTotalProducts);

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
