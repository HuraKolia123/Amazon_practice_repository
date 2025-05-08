// react
import React, { ChangeEvent, FC, useState } from "react";
//redax
import { useSelector } from "react-redux";
import { CleverSearchSelectCategory } from "../CleverSearchSelectCategory/CleverSearchSelectCategory";
//debouncoing
import { useDebounce } from "@/shared/libs/hooks/useDebounce";
//react-router
import { useNavigate, useSearchParams } from "react-router";
//query
import { useGetProductSearchItemsQuery } from "@/entities/product/productSearch";
import { useGetCategoryItemsQuery } from "@/entities/utility/productCategoryList";
//constants
import { getProductsRoute } from "@/shared/libs/constants/routes";
import { buildUrlWithSearchParams } from "@/shared/libs/utils/buildUrlWithSearchParams";
//ui
import { DropDown } from "@/shared/ui/DropDown";
import { CleverSearchContent } from "../CleverSearchContent";
import { Input } from "@/shared/ui/Input";
//assets
import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
// styles
import styles from "./CleverSearch.module.scss";
import { getCategoryId } from "@/pages/search/model/selectors/productPageSelectors";
import { SEARCH_PARAM_KEYS } from "@/shared/libs/constants/searchParams";

interface CleverSearchProps {
  searchQuery?: string;
}

export const CleverSearch: FC<CleverSearchProps> = ({ searchQuery }) => {
  const navigate = useNavigate();

  const [_, setSearchParams] = useSearchParams();

  const category_id = useSelector(getCategoryId);

  const [text, setText] = useState(searchQuery || "");

  const [isFocused, setIsFocused] = useState(false);

  const debouncedText = useDebounce(text, 1000);

  const isSubmitDisabled = debouncedText.length < 3;

  const isOnSearchPage = location.pathname.startsWith(getProductsRoute());

  const {
    isFetching: isFetchingCategories,
    isLoading: isLoadingCategories,
    data: categoriesData,
    isError: isCategoriesError,
  } = useGetCategoryItemsQuery(
    {
      country: "US",
    },
    {
      skip: isSubmitDisabled || isOnSearchPage,
    }
  );

  const {
    isFetching: isFetchingProducts,
    isLoading: isLoadingProducts,
    data: productsData,
    isError: isProductError,
  } = useGetProductSearchItemsQuery(
    {
      category_id: category_id,
      query: debouncedText,
    },
    {
      skip: isSubmitDisabled || isOnSearchPage,
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
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  const searchProductsHandler = () => {
    if (!isOnSearchPage) {
      navigate(
        buildUrlWithSearchParams(getProductsRoute(), {
          query: debouncedText,
        })
      );
    }

    if (isOnSearchPage) {
      setSearchParams((prev) => {
        prev.set(SEARCH_PARAM_KEYS.QUERY, text);
        return prev;
      });
    }
  };

  const isEnterPicked = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !isSubmitDisabled) {
      e.currentTarget.blur();
      searchProductsHandler();
      setIsFocused(false);
    }
  };

  const onRightSearchButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSubmitDisabled) {
      e.currentTarget.blur();
      searchProductsHandler();
      setIsFocused(false);
    }
  };

  const filteredCategories = categoriesData?.data.filter((item) => {
    return item.name.includes(text);
  });

  const isResultLoading =
    isLoadingCategories ||
    isFetchingCategories ||
    isLoadingProducts ||
    isFetchingProducts;

  const isResultError = isCategoriesError || isProductError;

  return (
    <DropDown
      maxWidth="100%"
      isOpen={isFocused && !isSubmitDisabled && !isOnSearchPage} // Не відкриваємо на сторінці пошуку
      dropDownContent={
        <CleverSearchContent
          onCategoryClick={() => {}}
          isLoading={isResultLoading}
          isError={isResultError}
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
        inputSize="medium"
        leftIcon={<CleverSearchSelectCategory />}
        rightIcon={
          <div
            className={styles.rightSearchButton}
            onClick={onRightSearchButtonClick}
          >
            <SearchIcon />
          </div>
        }
      />
    </DropDown>
  );
};
