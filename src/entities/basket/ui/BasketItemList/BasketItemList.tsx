// react
import { FC } from "react";
// styles
import styles from "./BasketItemList.module.scss";
import { BasketItem } from "../BasketItem/BasketItem";
import { IProduct } from "@/entities/product/productSearch/model/product";

interface BasketItemListProps {
  goods: Pick<
    IProduct,
    "asin" | "product_photo" | "product_price" | "product_title"
  >[];
}

export const BasketItemList: FC<BasketItemListProps> = ({ goods }) => {
  return (
    <div className={styles.BasketItemList}>
      {goods.map((item) => {
        return (
          <BasketItem
            asin={item.asin}
            product_photo={item.product_photo}
            product_price={item.product_price}
            product_title={item.product_title}
            key={item.asin}
          />
        );
      })}
    </div>
  );
};
