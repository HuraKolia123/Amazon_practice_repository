// react
import { FC, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getProductPageState } from "../../model/selectors";
import { productPageActions } from "../../model/slice";
//ui
import { ProductPagination } from "../ProductPagination";
import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";
import { Loader } from "@/shared/ui/Loader";
// entities
import { ProductItemList } from "@/entities/product/productSearch";
//types
import { useGetProductSearchItemsQuery } from "@/entities/product/productSearch";
// styles
import styles from "./ProductSearchQuery.module.scss";

interface ProductSearchQueryProps {
  searchQuery?: string;
}

export const ProductSearchQuery: FC<ProductSearchQueryProps> = ({
  searchQuery,
}) => {
  const dispatch = useDispatch();

  const {
    page,
    sort_by,
    product_condition,
    deals_and_discounts,
    category_id,
    max_price,
    min_price,
  } = useSelector(getProductPageState);

  const { isFetching, data, isLoading, isError } =
    useGetProductSearchItemsQuery({
      country: "",
      page: page,
      query: searchQuery || "",
      sort_by: sort_by,
      product_condition: product_condition,
      deals_and_discounts: deals_and_discounts,
      category_id: category_id,
      min_price: min_price,
      max_price: max_price,
    });

  useEffect(() => {
    if (data?.data?.total_products) {
      dispatch(productPageActions.setTotalProducts(data?.data?.total_products));
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
          <ProductPagination currentPage={page} pagesCount={totalPages} />
        </div>
      )}
    </>
  );
};
