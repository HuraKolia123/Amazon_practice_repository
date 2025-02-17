// react
import { FC } from "react";
// styles
import styles from "./HeaderOption.module.scss";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";

interface HeaderOptionProps {
  optionItem: IProductCategoryItem;
  pickOption: (value: IProductCategoryItem) => void;
}

export const HeaderOption: FC<HeaderOptionProps> = ({
  optionItem,
  pickOption,
}) => {
  const onChangeOptionClick = () => {
    pickOption(optionItem);
  };

  return (
    <div className={styles.HeaderOption} onClick={onChangeOptionClick}>
      {optionItem.name}
    </div>
  );
};
