// react
import { FC } from "react";
// ui
import { FilterSectionItem } from "../FilterSectionItem/FilterSectionItem";
// styles
import styles from "./FilterSectionItemList.module.scss";

interface FilterSectionItemListProps {
  sectionItems: string[];
  selectSectionItem: (item: string) => void;
  selectedSectionItem: string;
}

export const FilterSectionItemList: FC<FilterSectionItemListProps> = ({
  selectSectionItem,
  sectionItems,
  selectedSectionItem,
}) => {
  return (
    <div className={styles.FilterSectionItemList}>
      {sectionItems.map((item) => {
        return (
          <FilterSectionItem
            sectionItemName={item}
            key={item}
            selectSectionItem={selectSectionItem}
            isSelected={selectedSectionItem === item}
          />
        );
      })}
    </div>
  );
};
