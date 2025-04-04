// react
import { FC } from "react";
//ui
import { StarRating } from "@/shared/ui/StarRating/StarRating";
// styles
import styles from "./ProductCustomerReview.module.scss";

interface ProductCustomerReviewProps {
  totalRating: number | undefined;
  review_star_rating: string;
}

export const ProductCustomerReview: FC<ProductCustomerReviewProps> = ({
  totalRating,
  review_star_rating,
}) => {
  return (
    <div className={styles.ProductCustomerReview}>
      <div className={styles.topSide}>
        <div className={styles.title}>Customer review</div>
        <div className={styles.rating}>
          <StarRating rating={Number(review_star_rating)} totalStars={5} />
          <div className={styles.evaluation}>{review_star_rating} out of 5</div>
        </div>
      </div>
      <div className={styles.globalRating}>{totalRating} global ratings</div>
    </div>
  );
};
