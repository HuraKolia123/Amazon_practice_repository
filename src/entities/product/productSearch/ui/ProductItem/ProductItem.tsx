// react
import { FC } from "react";
//react-router
import { Link } from "react-router-dom";
//ui
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Button } from "@/shared/ui/Button";
//constants
import { getSingleProductRoute } from "@/shared/libs/constants/routes";
//assets
import ChevronDown from "@/shared/libs/assets/svg/chevron_down.svg?react";
// types
import { IProduct } from "../../model/product";
// styles
import styles from "./ProductItem.module.scss";

interface ProductItemProps extends IProduct {}

export const ProductItem: FC<ProductItemProps> = ({
  asin,
  product_price,
  product_title,
  product_photo,
  product_star_rating,
  product_num_offers,
  product_num_ratings,
  sales_volume,
}) => {
  const salesVolumeNull = sales_volume === null;

  return (
    <div className={styles.ProductItem}>
      <div className={styles.topBlock}>
        <Link to={getSingleProductRoute(asin)} className={styles.link}>
          <div className={styles.imageContainer}>
            <img
              src={product_photo}
              alt="photo"
              className={styles.productPhoto}
            />
          </div>
          <div className={styles.productTitle}>{product_title}</div>
        </Link>
      </div>

      <div className={styles.middleBlock}>
        <div className={styles.starsRating}>
          <StarRating rating={Number(product_star_rating)} totalStars={5} />
          <div className={styles.icon}>
            <ChevronDown />
          </div>
          <div className={styles.productNumRating}>{product_num_ratings}</div>
        </div>
        <div className={styles.salesVolume}>
          {salesVolumeNull ? "Sales volume is absent" : `${sales_volume}`}
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.btnBlock}>
          <Button onClick={() => {}} buttonSizeVariant="small">
            See options
          </Button>
        </div>
        <div className={styles.actualOffers}>No featured offers available</div>
        <div className={styles.priceBlock}>
          <div className={styles.productPrice}>{product_price}</div>
          <div className={styles.offerLink}>
            <a href="">({product_num_offers} used & new offers)</a>
          </div>
        </div>
      </div>
    </div>
  );
};
