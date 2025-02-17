// react
import { FC, useRef, useState } from "react";
//assets
import ChevronDown from "../../../header/libs/assets/svg/chevron_down.svg?react";
// styles
import styles from "./HeaderSelect.module.scss";
import { HeaderOptionList } from "../HeaderOptionList/HeaderOptionList";
import { mokCategoriesData } from "@/pages/search/libs/constants/mokCategoriesData";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";
import { useClickOutside } from "@/shared/libs/hooks/useClickOutside";

interface HeaderSelectProps {
  selectedOption: IProductCategoryItem;
  setSelectedOption: (value: IProductCategoryItem) => void;
}

export const HeaderSelect: FC<HeaderSelectProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => setIsSelectOpen(false));

  const selectToggle = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const onSelectOption = (value: IProductCategoryItem) => {
    setSelectedOption(value);
    setIsSelectOpen(false);
  };
  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.HeaderSelect} onClick={selectToggle}>
        <div className={styles.text}>{selectedOption.name}</div>
        <div className={styles.openingIcon}>
          <ChevronDown />
        </div>
      </div>
      {isSelectOpen && (
        <div className={styles.selectContent}>
          <HeaderOptionList
            optionItems={mokCategoriesData}
            pickOption={onSelectOption}
          />
        </div>
      )}
    </div>
  );
};
