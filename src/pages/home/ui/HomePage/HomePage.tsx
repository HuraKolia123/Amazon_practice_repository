// react
import { FC } from "react";
// styles
import styles from "./HomePage.module.scss";
import { CleverSearch } from "@/widgets/cleverSearch";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles.HomePage}>
      <CleverSearch />
    </div>
  );
};
