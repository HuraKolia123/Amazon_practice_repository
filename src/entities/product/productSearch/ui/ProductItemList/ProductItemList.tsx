// react
import { FC } from "react";
// ui
import { ProductItem } from "../ProductItem";
// types
import { IProduct } from "../../model/product";
// styles
import styles from "./ProductItemList.module.scss";

interface ProductItemList {
  products: IProduct[];
}

export const ProductItemList: FC<ProductItemList> = ({ products }) => {
  return (
    <div className={styles.ProductItemList}>
      {products.map((item) => {
        return <ProductItem {...item} key={item.asin} />;
      })}
    </div>
  );
};
