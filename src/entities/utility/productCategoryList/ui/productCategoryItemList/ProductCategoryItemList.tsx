// react
import { FC } from "react";
//ui
import { ProductCategoryItem } from "../productCategoryItem/ProductCategoryItem";
//types
import { IProductCategoryItem } from "../../model/types/productCategoryList";
// styles
import styles from "./ProductCategoryItemList.module.scss";

interface ProductCategoryItemListProps {
  categories: IProductCategoryItem[];
  onCategoryClick: (categoryId: string) => void;
}

export const ProductCategoryItemList: FC<ProductCategoryItemListProps> = ({
  categories,
  onCategoryClick,
}) => {
  return (
    <div className={styles.ProductCategoryItemList}>
      {categories.map((item) => {
        return (
          <ProductCategoryItem
            {...item}
            key={item.id}
            onCategoryClick={onCategoryClick}
          />
        );
      })}
    </div>
  );
};
