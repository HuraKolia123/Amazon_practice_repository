import { FC } from "react";
//assets
import Cross from "@/entities/basket/libs/assets/svg/cross.svg?react";
import Heart from "@/entities/basket/libs/assets/svg/heart.svg?react";
import Plus from "@/entities/basket/libs/assets/svg/plus.svg?react";
import Minus from "@/entities/basket/libs/assets/svg/minus.svg?react";

// styles
import styles from "./BasketItem.module.scss";
import { IProduct } from "@/entities/product/productSearch/model/product";

interface BasketItemProps
  extends Pick<
    IProduct,
    "asin" | "product_photo" | "product_title" | "product_price"
  > {}

export const BasketItem: FC<BasketItemProps> = ({
  product_price,
  product_title,
  product_photo,
  asin,
}) => {
  return (
    <div className={styles.BasketItem}>
      <div className={styles.leftItemSide}>
        <Cross />
        <Heart />
      </div>
      <div className={styles.goodInfoSide}>
        <div className={styles.imageBlock}>
          <img
            src={product_photo}
            alt={product_title}
            className={styles.image}
          />
        </div>
        <div className={styles.goodName}>product_title</div>
      </div>
      <div className={styles.quantityAndPriceBlock}>
        <div className={styles.quantityBlock}>
          <button className={styles.iconButton}>
            <Plus />
          </button>
          <div className={styles.quantity}>1</div>
          <button className={styles.iconButton}>
            <Minus />
          </button>
        </div>
        <div className={styles.priceBlock}>{product_price}</div>
      </div>
    </div>
  );
};
