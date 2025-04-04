// react
import { FC } from "react";
// styles
import styles from "./ProductReviewsItemList.module.scss";
import { IProductReview } from "../../model/review";
import { ProductReviewsItem } from "../ProductReviewsItem";

interface ProductReviewsItemListProps {
  reviews: IProductReview[];
}

export const ProductReviewsItemList: FC<ProductReviewsItemListProps> = ({
  reviews,
}) => {
  return (
    <div className={styles.ProductReviewsItemList}>
      {reviews.map((item) => {
        return <ProductReviewsItem {...item} key={item.review_id} />;
      })}
    </div>
  );
};
