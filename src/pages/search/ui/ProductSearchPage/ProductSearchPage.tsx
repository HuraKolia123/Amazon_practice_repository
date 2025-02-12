// react
import { FC } from "react";
//debouncing
import { useDebounce } from "@/shared/libs/hooks/useDebounce";
// react-router-dom
import { useSearchParams } from "react-router-dom";
//ui
import { ProductInfoQueryField } from "../ProductInfoQueryField/ProductInfoQueryField";
import { ProductSearchNameInput } from "../ProductSearchNameInput";
import { ProductSearchQuery } from "../ProductSearchQuery";
// styles
import styles from "./ProductSearchPage.module.scss";
import { ProductSideBar } from "../ProductSideBar/ProductSideBar";

interface ProductSearchPageProps {}

export const ProductSearchPage: FC<ProductSearchPageProps> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") || "";
  const debouncedText = useDebounce(searchQuery, 1000);

  const handleSearchParams = (newQuery: string) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div className={styles.ProductSearchPage}>
      <ProductInfoQueryField queryName={searchQuery} />
      <div className={styles.content}>
        <ProductSideBar />
        <div className={styles.query}>
          <ProductSearchQuery searchQuery={debouncedText} />
        </div>
      </div>
    </div>
  );
};
