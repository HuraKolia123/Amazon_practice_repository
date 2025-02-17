// react
import { FC } from "react";
// styles
import styles from "./HomePage.module.scss";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return <div className={styles.HomePage}></div>;
};
