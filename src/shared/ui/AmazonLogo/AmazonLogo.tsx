// react
import { FC } from "react";
//react-router-dom
import { Link } from "react-router-dom";
//route
import { getHomeRoute } from "@/shared/libs/constants/routes";
//assets
import amazon from "@/shared/libs/assets/png/amazonLogo.png";
// styles
import styles from "./AmazonLogo.module.scss";

interface AmazonLogoProps {}

export const AmazonLogo: FC<AmazonLogoProps> = ({}) => {
  return (
    <Link to={getHomeRoute()} className={styles.AmazonLogoWrapper}>
      <img src={amazon} className={styles.AmazonLogo} />
    </Link>
  );
};
