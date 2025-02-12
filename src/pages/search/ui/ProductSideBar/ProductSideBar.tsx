// react
import { FC } from "react";
// styles
import styles from "./ProductSideBar.module.scss";
import { ProductPriceFilter } from "../ProductPriceFilter";
import { ProductDealsAndDiscounts } from "../ProductDealsAndDiscounts";
import { ProductConditionComponent } from "../ProductConditionComponent";

interface ProductSideBarProps {}

export const ProductSideBar: FC<ProductSideBarProps> = ({}) => {
  return (
    <div className={styles.ProductSideBar}>
      <ProductPriceFilter />
      <ProductDealsAndDiscounts />
      <ProductConditionComponent />
    </div>
  );
};
