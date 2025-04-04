// react
import { FC } from "react";

// react-router-dom
import { useSearchParams } from "react-router-dom";
//ui
import { ProductInfoQueryField } from "../ProductInfoQueryField/ProductInfoQueryField";
import { ProductSearchQuery } from "../ProductSearchQuery";
// styles
import styles from "./ProductSearchPage.module.scss";
import { ProductSideBar } from "../ProductSideBar/ProductSideBar";

interface ProductSearchPageProps {}

export const ProductSearchPage: FC<ProductSearchPageProps> = ({}) => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") || "";

  return (
    <div className={styles.ProductSearchPage}>
      <ProductInfoQueryField searchQuery={searchQuery} />
      <div className={styles.content}>
        <ProductSideBar />
        <div className={styles.query}>
          <ProductSearchQuery searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};
