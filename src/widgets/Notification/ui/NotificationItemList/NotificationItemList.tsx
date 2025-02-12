// react
import { FC } from "react";
// styles
import styles from "./NotificationItemList.module.scss";

interface NotificationItemListProps {}

export const NotificationItemList: FC<NotificationItemListProps> = ({}) => {
  return <div className={styles.NotificationItemList}></div>;
};
