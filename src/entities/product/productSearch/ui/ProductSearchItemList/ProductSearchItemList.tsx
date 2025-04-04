// react
import { FC } from "react";
//ui
import { ProductSearchItem } from "../ProductSearchItem";
//types
import { IProduct } from "../../model/product";
// styles
import styles from "./ProductSearchItemList.module.scss";

interface ProductSearchItemListProps {
  products: IProduct[];
}

export const ProductSearchItemList: FC<ProductSearchItemListProps> = ({
  products,
}) => {
  return (
    <div className={styles.ProductSearchItemList}>
      {products.map((item) => {
        return <ProductSearchItem {...item} key={item.asin} />;
      })}
    </div>
  );
};
