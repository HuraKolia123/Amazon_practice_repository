// react
import { FC } from "react";
// styles
import styles from "./HorizontalLine.module.scss";

interface HorizontalLineProps {}

export const HorizontalLine: FC<HorizontalLineProps> = ({}) => {
  return <div className={styles.HorizontalLine}></div>;
};
