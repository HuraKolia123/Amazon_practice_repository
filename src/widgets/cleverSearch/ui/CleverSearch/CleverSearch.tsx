// react
import { ChangeEvent, FC, useState } from "react";
//redax
import { useSelector } from "react-redux";
import { CleverSearchSelectCategory } from "../CleverSearchSelectCategory/CleverSearchSelectCategory";
//debouncoing
import { useDebounce } from "../../../../shared/libs/hooks/useDebounce";
//react-router
import { useNavigate } from "react-router";
//query
import { useGetProductSearchItemsQuery } from "@/entities/product/productSearch";
import { useGetCategoryItemsQuery } from "@/entities/utility/productCategoryList";
//constants
import { getProductsRoute } from "@/shared/libs/constants/routes";
import { buildUrlWithSearchParams } from "@/shared/libs/utils/buildUrlWithSearchParams";
//assets
import SearchIcon from "../../assets/svg/searchIcon.svg?react";
//ui
import { DropDown } from "@/shared/ui/dropDown";
import { CleverSearchContent } from "../CleverSearchContent";
import { Input } from "@/shared/ui/Input";

// styles
import styles from "./CleverSearch.module.scss";
import { getProductPageState } from "@/pages/search/model/selectors";

interface CleverSearchProps {
  searchQuery?: string;
}

export const CleverSearch: FC<CleverSearchProps> = ({ searchQuery }) => {
  const navigate = useNavigate();
  const {
    category_id,
    deals_and_discounts,
    max_price,
    min_price,
    page,
    product_condition,
    sort_by,
  } = useSelector(getProductPageState);

  const [text, setText] = useState(searchQuery || "");

  const [isFocused, setIsFocused] = useState(false);

  const debouncedText = useDebounce(text, 1000);

  const isSubmitDisabled = debouncedText.length < 3;

  const {
    isFetching: isFetchingCategories,
    isLoading: isLoadingCategories,
    data: categoriesData,
  } = useGetCategoryItemsQuery(
    {
      country: "US",
    },
    {
      skip: isSubmitDisabled,
    }
  );

  const {
    isFetching: isFetchingProducts,
    isLoading: isLoadingProducts,
    data: productsData,
  } = useGetProductSearchItemsQuery(
    {
      country: "US",
      page: page,
      query: debouncedText,
      category_id: category_id,
      deals_and_discounts: deals_and_discounts,
      max_price: max_price,
      min_price: min_price,
      product_condition: product_condition,
      sort_by: sort_by,
    },
    {
      skip: isSubmitDisabled,
    }
  );

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 3 && !isFocused) {
      setIsFocused(true);
    }
    setText(e.target.value);
  };

  const onFocusChange = () => {
    if (!isSubmitDisabled) {
      setIsFocused(true);
    }
  };

  const onBlurChange = () => {
    setIsFocused(false);
  };

  const isResultLoading =
    isLoadingCategories ||
    isFetchingCategories ||
    isLoadingProducts ||
    isFetchingProducts;

  const isEnterPicked = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !isSubmitDisabled) {
      navigate(
        buildUrlWithSearchParams(getProductsRoute(), {
          query: debouncedText,
        })
      );
    }
  };

  const filteredCategories = categoriesData?.data.filter((item) => {
    return item.name.includes(text);
  });

  return (
    <DropDown
      maxWidth="100%"
      isOpen={isFocused && !isSubmitDisabled}
      dropDownContent={
        <CleverSearchContent
          onCategoryClick={() => {}}
          isLoading={isResultLoading}
          categoriesData={filteredCategories || []}
          productsData={productsData?.data.products || []}
        />
      }
    >
      <Input
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        onChange={onTextChange}
        value={text}
        onKeyDown={isEnterPicked}
        placeholder="Search Amazon"
        backgroundColor="white"
        leftIcon={<CleverSearchSelectCategory />}
        rightIcon={
          <div className={styles.rightSearchButton}>
            <SearchIcon />
          </div>
        }
      />
    </DropDown>
  );
};
