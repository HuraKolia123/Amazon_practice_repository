// react
import { FC } from "react";
// ui
import { FilterSectionItemList } from "../FilterSectionItemList/FilterSectionItemList";
// styles
import styles from "./FilterSection.module.scss";

interface FilterSectionProps {
  title: string;
  sectionItems: string[];
  selectSectionItem: (item: string) => void;
  selectedSectionItem: string;
}

export const FilterSection: FC<FilterSectionProps> = ({
  title,
  sectionItems,
  selectSectionItem,
  selectedSectionItem,
}) => {
  return (
    <div className={styles.FilterSection}>
      <div className={styles.title}>{title}</div>
      <FilterSectionItemList
        sectionItems={sectionItems}
        selectSectionItem={selectSectionItem}
        selectedSectionItem={selectedSectionItem}
      />
    </div>
  );
};
