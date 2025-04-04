//react
import { FC, useState } from "react";
//assets
import Cross from "@/shared/libs/assets/svg/cross.svg?react";
//ui
import { ProductReviewCommentVersion } from "../ProductReviewCommentVersion/ProductReviewCommentVersion";
// styles
import styles from "./ProductReviewPhotoModal.module.scss";

interface ProductReviewPhotoModalProps {
  review_images: string[];
  review_author: string;
  review_author_avatar?: string;
  review_star_rating: string;
  review_title: string;
  review_comment: string;
  review_date: string;
}

export const ProductReviewPhotoModal: FC<ProductReviewPhotoModalProps> = ({
  review_author,
  review_author_avatar,
  review_comment,
  review_star_rating,
  review_title,
  review_images,
  review_date,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className={styles.reviewImages}>
      {review_images.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="review"
          className={styles.reviewImage}
          onClick={() => openModal(item)}
        />
      ))}

      {isModalOpen && activeImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="modal review"
              className={styles.modalImage}
            />

            <ProductReviewCommentVersion
              review_author={review_author}
              review_comment={review_comment}
              review_date={review_date}
              review_images={review_images}
              review_star_rating={review_star_rating}
              review_title={review_title}
              review_author_avatar={review_author_avatar}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />

            <div className={styles.closeButton} onClick={closeModal}>
              <Cross />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
