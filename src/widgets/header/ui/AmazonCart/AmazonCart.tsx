// react
import { FC } from "react";
//assets
import AmazonCartPng from "../../libs/assets/png/amazonCart.png";
// styles
import styles from "./AmazonCart.module.scss";

interface AmazonCartProps {}

export const AmazonCart: FC<AmazonCartProps> = ({}) => {
  return (
    <div className={styles.AmazonCart}>
      <img src={AmazonCartPng} alt="AmazonCart..." />
    </div>
  );
};
