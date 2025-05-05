// react
import { FC, useEffect } from "react";

//ui
import { ProductPagination } from "../ProductPagination";
import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";
import { Loader } from "@/shared/ui/Loader";
//queryParams
import { useSearchProductParams } from "../../libs/hooks/useSearchProductParams";
// entities
import { ProductItemList } from "@/entities/product/productSearch";
//types
import { useGetProductSearchItemsQuery } from "@/entities/product/productSearch";
// styles
import styles from "./ProductSearchQuery.module.scss";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_KEYS } from "@/shared/libs/constants/searchParams";

interface ProductSearchQueryProps {}

export const ProductSearchQuery: FC<ProductSearchQueryProps> = ({}) => {
  const searchParams = useSearchProductParams();

  const [_, setSearchParams] = useSearchParams();

  const { isFetching, data, isLoading, isError } =
    useGetProductSearchItemsQuery({
      country: "",
      category_id: searchParams.category_id || "",
      deals_and_discounts: searchParams.deals_and_discounts,
      min_price: searchParams.min_price,
      max_price: searchParams.max_price,
      page: searchParams.page,
      product_condition: searchParams.product_condition,
      query: searchParams.query,
      sort_by: searchParams.sort_by,
    });

  useEffect(() => {
    if (data?.data?.total_products) {
      setSearchParams((prev) => {
        prev.set(
          SEARCH_PARAM_KEYS.TOTAL_PRODUCTS,
          String(data.data.total_products)
        );

        return prev;
      });
    }
  }, [data]);

  // if (data?.data?.total_products && data?.data?.total_products !== state) {
  //   setState(data.data.total_products);
  // }

  const totalPages = (data?.data?.total_products || 16) / 16;

  const totalProductsZero = data?.data.total_products === 0;

  if (isLoading || isFetching) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      {totalProductsZero ? (
        <div className={styles.info}>There aren't any goods...</div>
      ) : (
        <div className={styles.ProductSearchList}>
          <ProductItemList products={data?.data.products || []} />
          <ProductPagination
            //@ts-ignore
            currentPage={Number(searchParams.page)}
            pagesCount={totalPages}
          />
        </div>
      )}
    </>
  );
};
