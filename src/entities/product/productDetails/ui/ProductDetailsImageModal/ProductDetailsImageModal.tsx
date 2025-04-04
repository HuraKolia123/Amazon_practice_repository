import { FC, useState } from "react";
// styles
import styles from "./ProductDetailsImageModal.module.scss";
import { Modal } from "@/shared/ui/Modal/Modal";

interface ProductDetailsImageModalProps {
  product_photos: string[];
  product_title: string;

  isOpen: boolean;
  onClose: () => void;
  mainPhoto: string;
  setMainPhoto: (photo: string) => void;
}

export const ProductDetailsImageModal: FC<ProductDetailsImageModalProps> = ({
  product_photos,
  product_title,
  isOpen,
  onClose,
  mainPhoto,
  setMainPhoto,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      maxWidth={1442}
      maxHeight={561}
      onClose={onClose}
      isCloseIcon={true}
    >
      <div className={styles.modalContent}>
        <div
          className={styles.modalMainImage}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={mainPhoto}
            alt="main photo"
            className={`${styles.modalMainImage} ${
              isZoomed ? styles.zoomed : ""
            }`}
          />
        </div>
        <div className={styles.rightModalSide}>
          <div className={styles.modalText}>{product_title}</div>
          <div className={styles.modalAdditionaImages}>
            {product_photos.map((item) => (
              <div key={item}>
                <img
                  src={item}
                  alt="additional image"
                  className={`${styles.modalAdditionalImage} ${
                    item === mainPhoto ? styles.selected : ""
                  }`}
                  onClick={() => setMainPhoto(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
