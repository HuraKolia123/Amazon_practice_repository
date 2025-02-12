// react
import { FC } from "react";
//dispatch
import { useDispatch } from "react-redux";
//slice
import { productPageActions } from "../../model/slice";
//query
import { useGetCategoryItemsQuery } from "@/entities/utility/productCategoryList";
//ui
import { ProductCategoryItemList } from "@/entities/utility/productCategoryList";
// styles
import styles from "./ProductCategoriesList.module.scss";
import { Loader } from "@/shared/ui/Loader";

interface ProductCategoriesListProps {}

export const ProductCategoriesList: FC<ProductCategoriesListProps> = ({}) => {
  const { isFetching, isLoading, error, data } = useGetCategoryItemsQuery({
    country: "US",
  });

  const dispatch = useDispatch();

  if (isLoading || isFetching) {
    <Loader />;
  }

  if (error) {
    <div>Error!</div>;
  }

  const onCategoryClick = (categoryId: string) => {
    dispatch(productPageActions.setCategory(categoryId));
  };

  return (
    <div className={styles.ProductCategoriesList}>
      <ProductCategoryItemList
        categories={data?.data || []}
        onCategoryClick={onCategoryClick}
      />
    </div>
  );
};
