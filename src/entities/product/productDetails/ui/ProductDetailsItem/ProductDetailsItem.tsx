// react
import { FC } from "react";
//types
import { IProductDetails } from "../../model/details";
//ui
import { ProductDetailsReviewBlock } from "../ProductDetailsReviewBlock/ProductDetailsReviewBlock";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { ProductDetailsImagesComponent } from "../ProductDetailsImagesComponent";
import { SeeMoreComponent } from "@/shared/ui/SeeMoreComponent";
import { HorizontalLine } from "@/shared/ui/HorizontalLine";
//assets
import ChevronDown from "@/shared/libs/assets/svg/chevron_down.svg?react";
import MessageIcon from "@/shared/libs/assets/svg/messageIcon.svg?react";
// styles
import styles from "./ProductDetailsItem.module.scss";
import { ProductDetailsCustomerVideos } from "../ProductDetailsCustomerVideos";

interface ProductDetailsItemProps extends IProductDetails {}

export const ProductDetailsItem: FC<ProductDetailsItemProps> = ({
  asin,
  product_title,
  product_byline,
  product_byline_link,
  product_star_rating,
  product_num_ratings,
  is_amazon_choice,
  product_details,
  product_description,
  product_photos,
  product_photo,
  user_uploaded_videos,
}) => {
  return (
    <div className={styles.allContent}>
      <div className={styles.ProductDetailsItem}>
        <ProductDetailsImagesComponent
          product_title={product_title}
          product_photos={product_photos || [product_photo]}
        />
        <div className={styles.infoProductBlock}>
          <div className={styles.productTitle}>{product_title}</div>

          <div className={styles.ratingBlock}>
            <div>
              <a
                href={product_byline_link}
                className={styles.productByLineLink}
              >
                {product_byline}
              </a>
            </div>
            <div className={styles.productRating}>
              <div className={styles.productStars}>
                <div className={styles.productStarRating}>
                  {product_star_rating}
                </div>
                <StarRating
                  rating={Number(product_star_rating)}
                  totalStars={5}
                />
                <div className={styles.chevronDownIcon}>
                  <ChevronDown />
                </div>
              </div>
              <div className={styles.ratingsQuantiti}>
                {product_num_ratings} ratings
              </div>
              <div className={styles.verticalLine}>|</div>
              <div className={styles.productInformation}>
                <a
                  href={"productInforamtion"}
                  className={styles.productInformationLink}
                >
                  Search this page
                </a>
              </div>
            </div>
            {is_amazon_choice && (
              <div className={styles.amazonChoice}>
                Amazon's <span>Choice</span>
              </div>
            )}
            <HorizontalLine />
          </div>

          {product_details && (
            <SeeMoreComponent
              maxHeight={130}
              topTextButton="See less"
              bottomTextButton="See more"
            >
              <div className={styles.additionalProductInfo}>
                {product_details &&
                  Object.entries(product_details).map(([key, value]) => {
                    return (
                      <div
                        className={styles.infoAboutVersion}
                        key={key}
                        id={key}
                      >
                        <div className={styles.key}>{key}</div>
                        <div className={styles.value}>{value}</div>
                      </div>
                    );
                  })}
              </div>
            </SeeMoreComponent>
          )}

          <div className={styles.aboutThisItem}>
            <HorizontalLine />
            <div className={styles.topSide}>
              {product_description && (
                <div className={styles.title}>About this item</div>
              )}
              {product_description && (
                <div className={styles.productDescription}>
                  <div className={styles.dot}></div>
                  {product_description}
                </div>
              )}
            </div>
            <div className={styles.bottomReportBlock}>
              <div className={styles.report}>
                <div className={styles.messageIcon}>
                  <MessageIcon />
                </div>
                <a href="" className={styles.reportLink}>
                  Report an issue with this product or seller
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user_uploaded_videos.length !== 0 && (
        <ProductDetailsCustomerVideos
          title="Videos"
          additionalTitle="Videos for this product"
          user_uploaded_videos={user_uploaded_videos}
        />
      )}
      <ProductDetailsReviewBlock
        asin={asin}
        product_star_rating={product_star_rating}
        user_uploaded_videos={user_uploaded_videos}
      />
    </div>
  );
};
