// react
import { FC } from "react";
// styles
import styles from "./HomePage.module.scss";
import { HeaderCleverSearchInput } from "@/widgets/header/ui/HeaderCleverSearchInput/HeaderCleverSearchInput";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles.HomePage}>
      <HeaderCleverSearchInput />
    </div>
  );
};
