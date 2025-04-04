// react
import { FC, useState } from "react";
// styles
import styles from "./ProductDetailsReviewBlock.module.scss";
import { Button } from "@/shared/ui/Button";
import { ProductReviewsQuery } from "@/pages/product-details/ui/ProductReviewsQuery";
import { IUserUploadedVideo } from "../../model/details";

interface ProductDetailsReviewBlockProps {
  asin: string;
  product_star_rating: string;
  user_uploaded_videos: IUserUploadedVideo[];
}

export const ProductDetailsReviewBlock: FC<ProductDetailsReviewBlockProps> = ({
  asin,
  product_star_rating,
}) => {
  const [isReview, setIsReview] = useState(false);

  const reviewToggle = () => {
    setIsReview(!isReview);
  };

  return (
    <div className={styles.reviewBlock}>
      <Button onClick={reviewToggle}>
        {isReview ? "Close review" : "Show review"}
      </Button>
      <div></div>
      {isReview && (
        <ProductReviewsQuery
          asin={asin}
          product_star_rating={product_star_rating}
        />
      )}
    </div>
  );
};
