// react
import { FC } from "react";
// styles
import styles from "./ProductDetailsItem.module.scss";
import { IProductDetails } from "../../model/details";

interface ProductDetailsItemProps extends IProductDetails {}

export const ProductDetailsItem: FC<ProductDetailsItemProps> = ({
  asin,
  aboutProduct,
  country,
}) => {
  return (
    <div className={styles.ProductDetailsItem}>
      <div>{asin}</div>
      <div>{aboutProduct}</div>
      <div>{country}</div>
    </div>
  );
};
