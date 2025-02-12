// react
import { FC } from "react";
// styles
import styles from "./SelectedItemList.module.scss";
import { ISeleectedItem } from "../../model/selectedItem";
import { SelectedItem } from "../SelectedItem/SelectedItem";

interface SelectedItemListProps {
  selectedItems: ISeleectedItem[];
}

export const SelectedItemList: FC<SelectedItemListProps> = ({
  selectedItems,
}) => {
  return (
    <div className={styles.SelectedItemList}>
      {selectedItems?.map((item, index) => {
        return <SelectedItem content={item.content} key={index} />;
      })}
    </div>
  );
};
