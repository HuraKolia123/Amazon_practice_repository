// react
import { FC } from "react";
//ui
import { SeeMoreComponent } from "@/shared/ui/SeeMoreComponent";
import { StarRating } from "@/shared/ui/StarRating";
import { ProductReviewPhotoModal } from "../ProductReviewPhotoModal/ProductReviewPhotoModal";
//assets
import VerticalLine from "@/shared/libs/assets/svg/verticalLine.svg?react";
//types
import { IProductReview } from "../../model/review";
// styles
import styles from "./ProductReviewsItem.module.scss";

interface ProductReviewsItemProps extends IProductReview {}

export const ProductReviewsItem: FC<ProductReviewsItemProps> = ({
  review_author,
  review_star_rating,
  review_title,
  review_date,
  helpful_vote_statement,
  review_author_avatar,
  is_verified_purchase,
  review_comment,
  review_images,
}) => {
  return (
    <div className={styles.allContent}>
      <div className={styles.ProductReviewsItem}>
        <div className={styles.topSide}>
          <div className={styles.logoAndNickname}>
            <img
              src={review_author_avatar}
              alt="photo"
              className={styles.logo}
            />
            <div className={styles.reviewAuthor}>{review_author}</div>
          </div>

          <div className={styles.starRatingReview}>
            <StarRating rating={Number(review_star_rating)} totalStars={5} />
            <div className={styles.title}>{review_title}</div>
          </div>
          <div className={styles.dateBlock}>
            <div className={styles.date}>{review_date}</div>
            {is_verified_purchase && (
              <div className={styles.verified}>Verified Purchase</div>
            )}
          </div>
        </div>
        <SeeMoreComponent
          maxHeight={100}
          topTextButton="Read less"
          bottomTextButton="Read more"
        >
          <div className={styles.comment}>{review_comment}</div>
        </SeeMoreComponent>
        <div className={styles.bottomSide}>
          <ProductReviewPhotoModal
            review_images={review_images}
            review_author={review_author}
            review_author_avatar={review_author_avatar}
            review_star_rating={review_star_rating}
            review_title={review_title}
            review_date={review_date}
            review_comment={review_comment}
          />
          {helpful_vote_statement && (
            <div className={styles.helpfulVote}>{helpful_vote_statement}</div>
          )}
          <div className={styles.additionalBtns}>
            <div>
              <button className={styles.helpfulBtn}>Helpful</button>
            </div>
            <VerticalLine />
            <div className={styles.reportLinkBlock}>
              <a href="Report link" className={styles.reportLink}>
                Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
