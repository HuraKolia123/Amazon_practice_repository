// react
import { FC } from "react";
//ui
import { ProductInfoQueryField } from "../ProductInfoQueryField/ProductInfoQueryField";
import { ProductSearchQuery } from "../ProductSearchQuery";
// styles
import styles from "./ProductSearchPage.module.scss";
import { ProductSideBar } from "../ProductSideBar/ProductSideBar";

interface ProductSearchPageProps {}

export const ProductSearchPage: FC<ProductSearchPageProps> = ({}) => {
  return (
    <div className={styles.ProductSearchPage}>
      <ProductInfoQueryField />
      <div className={styles.content}>
        <ProductSideBar />
        <div className={styles.query}>
          <ProductSearchQuery />
        </div>
      </div>
    </div>
  );
};
