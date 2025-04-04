// react
import { FC } from "react";
//types
import { IUserUploadedVideo } from "../../model/details";
//ui
import { ProductDetailsVideoItem } from "../ProductDetailsVideoItem/ProductDetailsVideoItem";
// styles
import styles from "./ProductDetailsCustomVideosLowerSide.module.scss";

interface ProductDetailsCustomVideosLowerSideProps {
  visibleVideos: IUserUploadedVideo[];
}

export const ProductDetailsCustomVideosLowerSide: FC<
  ProductDetailsCustomVideosLowerSideProps
> = ({ visibleVideos }) => {
  return (
    <div className={styles.videos}>
      {visibleVideos.map((item) => {
        return <ProductDetailsVideoItem visibleVideo={item} key={item.id} />;
      })}
    </div>
  );
};
