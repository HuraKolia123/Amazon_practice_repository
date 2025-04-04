// react
import { FC } from "react";
import { useGetProductSearchItemsQuery } from "@/entities/product/productSearch";
import { Loader } from "@/shared/ui/Loader";
import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";
import { BasketItemList } from "@/entities/basket/ui/BasketItemList";

interface BasketQueryProps {}

export const BasketQuery: FC<BasketQueryProps> = ({}) => {
  const { isError, isFetching, isLoading, data } =
    useGetProductSearchItemsQuery({ category_id: "" });

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return <BasketItemList goods={data?.data.products || []} />;
};
