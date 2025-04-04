// react
import { ProductReviewsItemList } from "@/entities/product/productReviews";
import { useGetProductReviewsQuery } from "@/entities/product/productReviews/api/productReviews";
import { ProductCustomerReview } from "@/entities/product/productReviews/ui/ProductCustomerReview/ProductCustomerReview";
import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";
import { Loader } from "@/shared/ui/Loader";
import { FC } from "react";
import styles from "./ProductReviewsQuery.module.scss";

interface ProductReviewsQueryProps {
  asin: string;
  product_star_rating: string;
}

export const ProductReviewsQuery: FC<ProductReviewsQueryProps> = ({
  asin,
  product_star_rating,
}) => {
  const { isError, isFetching, isLoading, data } = useGetProductReviewsQuery({
    asin: asin || "",
  });

  const totalRating = data?.data.total_ratings || undefined;

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <div className={styles.ProductReviewsQuery}>
      <ProductCustomerReview
        review_star_rating={product_star_rating}
        totalRating={totalRating}
      />
      <ProductReviewsItemList reviews={data?.data.reviews || []} />
    </div>
  );
};
