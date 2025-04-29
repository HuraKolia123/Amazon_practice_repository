// react
import { FC } from "react";
//ui
import { PaginationButtons } from "@/widgets/paginationButtons";
import { SEARCH_PARAM_KEYS } from "@/shared/libs/constants/searchParams";
import { useSingleSearchParam } from "../../libs/hooks/useSingleSearchParam";
import { setSearchParams } from "@/shared/libs/helpers/setSearchParams";

interface ProductPaginationProps {
  pagesCount: number;
}

export const ProductPagination: FC<ProductPaginationProps> = ({
  pagesCount,
}) => {
  const currentPage = useSingleSearchParam(SEARCH_PARAM_KEYS.PAGE);

  const onCurrentPageChange = (value: number) => {
    setSearchParams({
      [SEARCH_PARAM_KEYS.PAGE]: value,
    });
  };

  return (
    <PaginationButtons
      currentPage={Number(currentPage)}
      pagesCount={pagesCount}
      setCurrentPage={onCurrentPageChange}
    />
  );
};
