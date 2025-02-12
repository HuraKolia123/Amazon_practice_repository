// react
import { FC } from "react";
//types
import { IProductCategoryItem } from "../../model/types/productCategoryList";
// styles
import styles from "./ProductCategoryItem.module.scss";

interface ProductCategoryItemProps extends IProductCategoryItem {
  onCategoryClick: (categoryId: string) => void;
}

export const ProductCategoryItem: FC<ProductCategoryItemProps> = ({
  id,
  name,
  onCategoryClick,
}) => {
  return (
    <div
      className={styles.ProductCategoryItem}
      onClick={() => onCategoryClick(id)}
    >
      {name}
    </div>
  );
};
