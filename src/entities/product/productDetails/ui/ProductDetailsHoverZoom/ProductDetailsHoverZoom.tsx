import { FC } from "react";
// styles
import styles from "./ProductDetailsHoverZoom.module.scss";

interface ProductDetailsHoverZoomProps {
  mainPhoto: string;
  cursorPosition: { x: number; y: number };
}

export const ProductDetailsHoverZoom: FC<ProductDetailsHoverZoomProps> = ({
  mainPhoto,
  cursorPosition,
}) => {
  return (
    <div className={styles.zoomModal}>
      <img
        src={mainPhoto}
        alt="zoomed"
        className={styles.zoomedImage}
        style={{
          transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
        }}
      />
    </div>
  );
};
