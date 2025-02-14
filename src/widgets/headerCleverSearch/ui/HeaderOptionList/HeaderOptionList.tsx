// react
import { FC } from "react";
// styles
import styles from "./HeaderOptionList.module.scss";
import { HeaderOption } from "../HeaderOption/HeaderOption";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";

interface HeaderOptionListProps {
  optionItems: IProductCategoryItem[];
  pickOption: (value: IProductCategoryItem) => void;
}

export const HeaderOptionList: FC<HeaderOptionListProps> = ({
  optionItems,
  pickOption,
}) => {
  return (
    <div className={styles.HeaderOptionList}>
      {optionItems.map((item) => {
        return (
          <HeaderOption
            optionItem={item}
            pickOption={pickOption}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
