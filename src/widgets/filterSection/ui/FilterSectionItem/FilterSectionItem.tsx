// react
import { FC } from "react";
// styles
import styles from "./FilterSectionItem.module.scss";

interface FilterSectionItemProps {
  sectionItemName: string;
  selectSectionItem: (item: string) => void;
}

export const FilterSectionItem: FC<FilterSectionItemProps> = ({
  selectSectionItem,
  sectionItemName,
}) => {
  const onChangeSectionItemClick = () => {
    selectSectionItem(sectionItemName);
  };

  return (
    <div
      className={styles.FilterSectionItem}
      onClick={onChangeSectionItemClick}
    >
      {sectionItemName}
    </div>
  );
};
