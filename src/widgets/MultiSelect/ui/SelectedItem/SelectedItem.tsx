// react
import { FC } from "react";
//types
import { ISelectedItem } from "../../model/selectedItem";
// styles
import styles from "./SelectedItem.module.scss";

interface SelectedItemProps extends ISelectedItem {}

export const SelectedItem: FC<SelectedItemProps> = ({ content }) => {
  return <div className={styles.SelectedItem}>{content}</div>;
};
