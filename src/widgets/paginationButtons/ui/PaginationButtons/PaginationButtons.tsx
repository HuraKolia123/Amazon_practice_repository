// react
import { FC } from "react";
// styles
import styles from "./PaginationButtons.module.scss";

interface PaginationButtonsProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  pagesCount: number;
}

export const PaginationButtons: FC<PaginationButtonsProps> = ({
  currentPage,
  pagesCount,
  setCurrentPage,
}) => {
  pagesCount = Number(pagesCount.toFixed());

  const prevButtonActive = currentPage !== 1;

  const nextButtonActive = currentPage !== pagesCount;

  const onPrevClick = () => {
    if (prevButtonActive) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextClick = () => {
    if (nextButtonActive) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pagesArray = Array.from({ length: pagesCount });

  const firstPage = 1;
  const previousFromCurrentPage = currentPage - 1;
  const nextFromCurrentPage = currentPage + 1;
  const lastPage = pagesArray.length;

  return (
    <div className={styles.PaginationButtons}>
      <button onClick={onPrevClick} disabled={!prevButtonActive}>
        Prev page
      </button>
      <div>{firstPage}</div>
      {currentPage > 3 ? <div>...</div> : null}

      {previousFromCurrentPage !== 1 && previousFromCurrentPage !== 0 && (
        <div>{previousFromCurrentPage}</div>
      )}

      {firstPage !== currentPage && (
        <div style={{ color: "orange" }}>{currentPage}</div>
      )}
      {nextFromCurrentPage !== lastPage && currentPage !== lastPage && (
        <div>{nextFromCurrentPage}</div>
      )}
      {currentPage <= lastPage - 3 ? <div>...</div> : null}
      {currentPage !== lastPage && <div>{lastPage}</div>}
      <button onClick={onNextClick} disabled={!nextButtonActive}>
        Next page
      </button>
    </div>
  );
};
