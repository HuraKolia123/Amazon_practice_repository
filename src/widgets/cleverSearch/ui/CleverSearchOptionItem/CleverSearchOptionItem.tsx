// react
import { FC } from "react";
// styles
import styles from "./CleverSearchOptionItem.module.scss";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";

interface CleverSearchOptionItemProps {
  optionItem: IProductCategoryItem;
  pickOption: (value: IProductCategoryItem) => void;
}

export const CleverSearchOptionItem: FC<CleverSearchOptionItemProps> = ({
  optionItem,
  pickOption,
}) => {
  const onChangeOptionClick = () => {
    pickOption(optionItem);
  };
  return (
    <div
      className={styles.CleverSearchOptionItem}
      onClick={onChangeOptionClick}
    >
      {optionItem.name}
    </div>
  );
};
