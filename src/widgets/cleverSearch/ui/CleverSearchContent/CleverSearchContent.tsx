// react
import { FC } from "react";
//ui
import { Loader } from "@/shared/ui/Loader";
import { ProductSearchItemList } from "@/entities/product/productSearch/ui/ProductSearchItemList/ProductSearchItemList";
import { ProductCategoryItemList } from "@/entities/utility/productCategoryList";
//types
import { IProduct } from "@/entities/product/productSearch/model/product";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";

// styles
import styles from "./CleverSearchContent.module.scss";

interface CleverSearchContentProps {
  onCategoryClick: (categoryId: string) => void;
  categoriesData: IProductCategoryItem[];
  productsData: IProduct[];
  isLoading: boolean;
}
export const CleverSearchContent: FC<CleverSearchContentProps> = ({
  categoriesData,
  productsData,
  isLoading,
  onCategoryClick,
}) => {
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  const isCategoriesEmpty = categoriesData.length === 0;

  const isProductsEmpty = productsData.length === 0;

  if (isCategoriesEmpty && isProductsEmpty && !isLoading) {
    return <div className={styles.noResults}>No results</div>;
  }

  return (
    <>
      {!isCategoriesEmpty && (
        <div className={styles.categories}>
          <div className={styles.headerOfCategories}>Categories</div>
          <ProductCategoryItemList
            onCategoryClick={onCategoryClick}
            categories={categoriesData || []}
          />
        </div>
      )}
      {!isProductsEmpty && (
        <div className={styles.products}>
          <div className={styles.headerOfProducts}>Products</div>
          <ProductSearchItemList products={productsData || []} />
        </div>
      )}
    </>
  );
};
