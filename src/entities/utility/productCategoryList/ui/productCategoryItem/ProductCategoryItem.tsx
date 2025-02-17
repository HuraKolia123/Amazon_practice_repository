// react
import { FC } from "react";
//types
import { IProductCategoryItem } from "../../model/types/productCategoryList";
// styles
import styles from "./ProductCategoryItem.module.scss";

interface ProductCategoryItemProps extends IProductCategoryItem {
  onCategoryClick: (categoryId: string) => void;
  isSelected?: boolean;
}

export const ProductCategoryItem: FC<ProductCategoryItemProps> = ({
  id,
  name,
  onCategoryClick,
  isSelected = false,
}) => {
  return (
    <div
      className={`${styles.mokCategoryName} ${isSelected ? styles.active : ""}`}
      onClick={() => onCategoryClick(id)}
    >
      {name}
    </div>
  );
};
