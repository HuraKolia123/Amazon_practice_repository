// react
import { FC } from "react";
// styles
import styles from "./ProductDetailsQuery.module.scss";
import { useGetProductDetailsQuery } from "@/entities/product/productDetails/api/productDetails";
import { Loader } from "@/shared/ui/Loader";
import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";
import { ProductDetailsItem } from "@/entities/product/productDetails/ui/ProductDetailsItem/ProductDetailsItem";
import { useParams } from "react-router-dom";

interface ProductDetailsQueryProps {}

export const ProductDetailsQuery: FC<ProductDetailsQueryProps> = ({}) => {
  const { asin } = useParams<{ asin: string }>();

  const { isLoading, isFetching, data, isError } = useGetProductDetailsQuery({
    asin: asin || "",
  });

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError || !data?.data) {
    return <ErrorComponent />;
  }

  return (
    <div className={styles.ProductDetailsQuery}>
      <ProductDetailsItem {...data?.data} />
    </div>
  );
};
