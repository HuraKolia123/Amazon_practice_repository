// react
import { FC } from "react";
//ui
import { StarRating } from "@/shared/ui/StarRating";
import { ProductReviewPhotosArrayModal } from "../ProductReviewPhotosArrayModal";
// styles
import styles from "./ProductReviewCommentVersion.module.scss";

interface ProductReviewCommentVersionProps {
  review_images: string[];
  review_author: string;
  review_author_avatar?: string;
  review_star_rating: string;
  review_title: string;
  review_comment: string;
  review_date: string;
  activeImage: string;
  setActiveImage: (item: string) => void;
}

export const ProductReviewCommentVersion: FC<
  ProductReviewCommentVersionProps
> = ({
  review_author,
  review_comment,
  review_date,
  review_images,
  review_star_rating,
  review_title,
  review_author_avatar,
  activeImage,
  setActiveImage,
}) => {
  return (
    <div className={styles.ProductReviewCommentVersion}>
      <div className={styles.avatarAndAuthor}>
        <img
          src={review_author_avatar}
          alt="author_avatar"
          className={styles.avatar}
        />
        <div className={styles.name}>{review_author}</div>
      </div>
      <div className={styles.middleBlock}>
        <StarRating rating={Number(review_star_rating)} totalStars={5} />
        <div className={styles.title}>{review_title}</div>
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.date}>{review_date}</div>
        <div className={styles.comment}>{review_comment}</div>
      </div>

      <div className={styles.imagesBlock}>
        <div className={styles.text}>Images in this review</div>
        {review_images.length > 1 && (
          <ProductReviewPhotosArrayModal
            review_images={review_images}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
        )}
      </div>
    </div>
  );
};
