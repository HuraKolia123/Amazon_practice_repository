// react
import { FC } from "react";
// styles
import styles from "./CleverSearchOptionList.module.scss";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";
import { CleverSearchOptionItem } from "../CleverSearchOptionItem/CleverSearchOptionItem";

interface CleverSearchOptionListProps {
  optionItems: IProductCategoryItem[];
  pickOption: (value: IProductCategoryItem) => void;
}

export const CleverSearchOptionList: FC<CleverSearchOptionListProps> = ({
  optionItems,
  pickOption,
}) => {
  return (
    <div className={styles.CleverSearchOptionList}>
      {optionItems.map((item) => {
        return (
          <CleverSearchOptionItem
            optionItem={item}
            pickOption={pickOption}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
