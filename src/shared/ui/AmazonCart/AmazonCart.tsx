// react
import { FC } from "react";
//assets
import AmazonCartPng from "@/shared/libs/assets/png/amazonCart.png";
// styles
import styles from "./AmazonCart.module.scss";
import { Link } from "react-router-dom";
import { getBasketRoute } from "@/shared/libs/constants/routes";

interface AmazonCartProps {}

export const AmazonCart: FC<AmazonCartProps> = ({}) => {
  return (
    <Link to={getBasketRoute()} className={styles.AmazonCart}>
      <img src={AmazonCartPng} alt="AmazonCart..." />
    </Link>
  );
};
