// react
import { FC, useRef, useState } from "react";
//redax
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/pages/search/model/selectors";
import { productPageActions } from "@/pages/search/model/slice";
//hooks
import { useClickOutside } from "@/shared/libs/hooks/useClickOutside";
//types
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";
//ui
import { CleverSearchOptionList } from "../CleverSearchOptionList";
//constants
import { mokCategoriesData } from "@/pages/search/libs/constants/mokCategoriesData";
//assets
import ChevronDown from "@/shared/libs/assets/svg/chevron_down.svg?react";
//styles
import styles from "./CleverSearchSelectCategory.module.scss";

interface CleverSearchSelectCategoryProps {}

export const CleverSearchSelectCategory: FC<
  CleverSearchSelectCategoryProps
> = ({}) => {
  const dispatch = useDispatch();
  const categoryId = useSelector(getCategory);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => setIsSelectOpen(false));

  const selectedOption =
    mokCategoriesData.find((item) => item.id === categoryId) ||
    mokCategoriesData[0];

  const selectToggle = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const onSetSelectedOptionClick = (option: IProductCategoryItem) => {
    dispatch(productPageActions.setCategory(option.id));
    setIsSelectOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.CleverSearchSelectCategory} onClick={selectToggle}>
        <div className={styles.text}>{selectedOption.name}</div>
        <div className={styles.openingIcon}>
          <ChevronDown />
        </div>
      </div>
      {isSelectOpen && (
        <div className={styles.selectContent}>
          <CleverSearchOptionList
            optionItems={mokCategoriesData}
            pickOption={onSetSelectedOptionClick}
          />
        </div>
      )}
    </div>
  );
};
