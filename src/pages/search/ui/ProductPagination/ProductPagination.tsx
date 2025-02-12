// react
import { FC } from "react";
//redux
import { useDispatch } from "react-redux";
import { productPageActions } from "../../model/slice";
//ui
import { PaginationButtons } from "@/widgets/paginationButtons";
// styles
import styles from "./ProductPagination.module.scss";

interface ProductPaginationProps {
  currentPage: number;
  pagesCount: number;
}

export const ProductPagination: FC<ProductPaginationProps> = ({
  currentPage,
  pagesCount,
}) => {
  const dispatch = useDispatch();

  const onCurrentPageChange = (value: number) => {
    dispatch(productPageActions.setPage(value));
  };

  return (
    <PaginationButtons
      currentPage={currentPage}
      pagesCount={pagesCount}
      setCurrentPage={onCurrentPageChange}
    />
  );
};
