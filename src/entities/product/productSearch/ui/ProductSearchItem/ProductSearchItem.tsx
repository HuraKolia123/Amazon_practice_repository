// react
import { FC } from "react";
//types
import { IProduct } from "../../model/product";
// styles
import styles from "./ProductSearchItem.module.scss";

interface ProductSearchItemProps extends IProduct {}

export const ProductSearchItem: FC<ProductSearchItemProps> = ({
  product_photo,
  product_price,
  product_title,
}) => {
  return (
    <div className={styles.ProductSearchItem}>
      <div className={styles.leftSide}>
        <img src={product_photo} alt="product photo" width={40} height={40} />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.productTitle}>{product_title}</div>
        <div className={styles.productPrice}>{product_price}</div>
      </div>
    </div>
  );
};
