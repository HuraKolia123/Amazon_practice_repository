// react
import { FC } from "react";
// styles
import styles from "./ProductReviewPhotosArrayModal.module.scss";

interface ProductReviewPhotosArrayModalProps {
  review_images: string[];
  activeImage: string;
  setActiveImage: (item: string) => void;
}

export const ProductReviewPhotosArrayModal: FC<
  ProductReviewPhotosArrayModalProps
> = ({ review_images, activeImage, setActiveImage }) => {
  return (
    <div className={styles.thumbnails}>
      {review_images.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="thumbnail"
          className={`${styles.thumbnail} ${
            item === activeImage ? styles.active : ""
          }`}
          onClick={() => setActiveImage(item)}
        />
      ))}
    </div>
  );
};
