// react
import { FC } from "react";
// styles
import styles from "./FilterSectionItem.module.scss";

interface FilterSectionItemProps {
  sectionItemName: string;
  selectSectionItem: (item: string) => void;
  isSelected: boolean;
}

export const FilterSectionItem: FC<FilterSectionItemProps> = ({
  selectSectionItem,
  sectionItemName,
  isSelected,
}) => {
  const onChangeSectionItemClick = () => {
    selectSectionItem(sectionItemName);
  };

  return (
    <div
      className={`${styles.FilterSectionItem} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={onChangeSectionItemClick}
    >
      {sectionItemName}
    </div>
  );
};
