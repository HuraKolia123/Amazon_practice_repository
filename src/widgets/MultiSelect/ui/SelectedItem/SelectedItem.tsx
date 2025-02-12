// react
import { FC } from "react";
// styles
import styles from "./SelectedItem.module.scss";
import { ISeleectedItem } from "../../model/selectedItem";

interface SelectedItemProps extends ISeleectedItem {}

export const SelectedItem: FC<SelectedItemProps> = ({ content }) => {
  return <div className={styles.SelectedItem}>{content}</div>;
};
