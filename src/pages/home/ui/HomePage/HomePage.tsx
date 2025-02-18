// react
import { FC } from "react";
// styles
import styles from "./HomePage.module.scss";
import { ProductDetailsPage } from "@/pages/product-details/ui/ProductDetailsPage/ProductDetailsPage";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles.HomePage}>
      <ProductDetailsPage />
    </div>
  );
};
