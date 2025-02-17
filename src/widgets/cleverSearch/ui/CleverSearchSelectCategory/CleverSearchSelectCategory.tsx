// react
import { FC } from "react";
//redax
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/pages/search/model/selectors";
import { productPageActions } from "@/pages/search/model/slice";
//types
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";
//ui
import { HeaderSelect } from "@/widgets/headerCleverSearch/ui/HeaderSelect/HeaderSelect";
import { mokCategoriesData } from "@/pages/search/libs/constants/mokCategoriesData";

interface CleverSearchSelectCategoryProps {}

export const CleverSearchSelectCategory: FC<
  CleverSearchSelectCategoryProps
> = ({}) => {
  const categoryId = useSelector(getCategory);
  const dispatch = useDispatch();

  const selectedOption =
    mokCategoriesData.find((item) => item.id === categoryId) ||
    mokCategoriesData[0];

  const onSetSelectedOptionClick = (option: IProductCategoryItem) => {
    dispatch(productPageActions.setCategory(option.id));
  };

  return (
    <HeaderSelect
      selectedOption={selectedOption}
      setSelectedOption={onSetSelectedOptionClick}
    />
  );
};
