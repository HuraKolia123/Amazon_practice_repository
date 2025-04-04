// react
import { FC } from "react";
//router-dom
import { useParams } from "react-router-dom";
//query
import { useGetProductDetailsQuery } from "@/entities/product/productDetails";
//ui
import { Loader } from "@/shared/ui/Loader";
import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";
import { ProductDetailsItem } from "@/entities/product/productDetails/ui/ProductDetailsItem/ProductDetailsItem";

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

  return <ProductDetailsItem {...data?.data} />;
};
