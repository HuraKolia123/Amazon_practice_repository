// react
import { FC } from "react";
// types
import { IProduct } from "../../model/product";
// styles
import styles from "./ProductItem.module.scss";
import { Button } from "@/shared/ui/Button";

interface ProductItemProps extends IProduct {}

export const ProductItem: FC<ProductItemProps> = ({
  product_price,
  product_title,
  product_photo,
  // sales_volume,
}) => {
  return (
    <div className={styles.ProductItem}>
      <div className={styles.topSide}>
        <div className={styles.imageContainer}>
          <img
            src={product_photo}
            alt="photo"
            className={styles.productPhoto}
          />
        </div>
      </div>
      <div className={styles.bottomSide}>
        <div className={styles.productTitle}>{product_title}</div>
        <div className={styles.ratingAndButtonBlock}>
          <div className={styles.ratingAndAdditionalInfo}>
            <div className={styles.productRating}>stars</div>
            <div className={styles.additionalInfo}>
              40K+ bought in past month
            </div>
          </div>

          <div className={styles.btnBlock}>
            <Button onClick={() => {}} buttonSizeVariant="small">
              See options
            </Button>
          </div>
        </div>

        <div className={styles.lowerBlockInfo}>
          <div className={styles.offersInfo}>No featured offers available</div>

          <div className={styles.lowerBlock}>
            <div className={styles.productPrice}>{product_price}</div>
            <div className={styles.offerLink}>
              <a href="">(7 used & new offers)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className={styles.ProductItem}>
      <div className={styles.productImage}>
        <img src={product_photo} className={styles.image} alt="No Image" />
      </div>
      <div className={styles.productInformation}>
        <div className={styles.productTitle}>{product_title}</div>
        <div className={styles.productPrice}>{product_price ?? "0$"}</div>
      </div>
    </div> */
}
