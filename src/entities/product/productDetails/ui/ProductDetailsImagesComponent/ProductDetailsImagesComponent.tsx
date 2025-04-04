// react
import { FC, useState } from "react";
//ui
import { ProductDetailsImageModal } from "../ProductDetailsImageModal/ProductDetailsImageModal";
import { ProductDetailsHoverZoom } from "../ProductDetailsHoverZoom/ProductDetailsHoverZoom";
//assets
import ArrowUp from "@/shared/libs/assets/svg/arrowUp.svg?react";
// styles
import styles from "./ProductDetailsImagesComponent.module.scss";

interface ProductDetailsImagesComponentProps {
  product_photos: string[];
  product_title: string;
}

export const ProductDetailsImagesComponent: FC<
  ProductDetailsImagesComponentProps
> = ({ product_photos, product_title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainPhoto, setMainPhoto] = useState(product_photos[0]);
  //......../////....////
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setCursorPosition({ x, y });
  };
  return (
    <>
      <div className={styles.imageBlock}>
        <div className={styles.additionaImages}>
          {product_photos.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item}
                  alt="additional image"
                  className={`${styles.additionalImage} ${
                    item === mainPhoto ? styles.activeAdditionalPhoto : ""
                  }`}
                  onClick={() => setMainPhoto(item)}
                />
              </div>
            );
          })}
        </div>
        <div
          className={styles.mainPhotoBlock}
          onMouseEnter={() => setIsZoomOpen(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsZoomOpen(false)}
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={mainPhoto}
            alt="main photo"
            className={styles.mainImage}
            onClick={() => setIsModalOpen(true)}
          />
          <div className={styles.icon}>
            <ArrowUp />
          </div>
        </div>
      </div>

      <ProductDetailsImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mainPhoto={mainPhoto}
        product_photos={product_photos}
        product_title={product_title}
        setMainPhoto={setMainPhoto}
      />

      {isZoomOpen && (
        <ProductDetailsHoverZoom
          mainPhoto={mainPhoto}
          cursorPosition={cursorPosition}
        />
      )}
    </>
  );
};
