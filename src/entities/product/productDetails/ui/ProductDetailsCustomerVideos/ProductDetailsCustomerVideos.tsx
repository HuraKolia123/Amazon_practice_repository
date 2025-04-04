//react
import { FC, useState } from "react";
//types
import { IProductDetails } from "../../model/details";
//assets
import LeftArrow from "@/shared/libs/assets/svg/leftArrow.svg?react";
import RightArrow from "@/shared/libs/assets/svg/rightArrow.svg?react";

//styles
import styles from "./ProductDetailsCustomerVideos.module.scss";
import { ProductDetailsCustomVideosLowerSide } from "../ProductDetailsCustomVideosLowerSide";

interface ProductDetailsCustomerVideosProps
  extends Pick<IProductDetails, "user_uploaded_videos"> {
  title: string;
  additionalTitle: string;
}

const ITEMS_PER_PAGE = 4;

export const ProductDetailsCustomerVideos: FC<
  ProductDetailsCustomerVideosProps
> = ({ user_uploaded_videos, title, additionalTitle }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(user_uploaded_videos.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleVideos = user_uploaded_videos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className={styles.ProductDetailsCustomerVideos}>
      <div className={styles.topBlock}>
        <div className={styles.title}>{title}</div>
        <div className={styles.pagesQuantiti}>
          Page {currentPage} of {totalPages}
        </div>
      </div>
      <div className={styles.middleBlock}>
        <div className={styles.additionalTitle}>{additionalTitle}</div>
        <div className={styles.videosBlock}>
          <div
            className={styles.leftArrow}
            onClick={handlePrev}
            style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
          >
            <LeftArrow />
          </div>
          <ProductDetailsCustomVideosLowerSide visibleVideos={visibleVideos} />
          <div
            className={styles.rightArrow}
            onClick={handleNext}
            style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
          >
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};
