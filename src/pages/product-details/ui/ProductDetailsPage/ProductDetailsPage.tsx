// react
import { FC } from "react";
// styles
import styles from "./ProductDetailsPage.module.scss";
import { ProductDetailsQuery } from "../ProductDetailsQuery/ProductDetailsQuery";

interface ProductDetailsPageProps {}

export const ProductDetailsPage: FC<ProductDetailsPageProps> = ({}) => {
  return (
    <div className={styles.ProductDetailsPage}>
      <ProductDetailsQuery />
    </div>
  );
};
