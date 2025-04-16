// react
import { ChangeEvent, FC, useState } from "react";
//assets
import SearchIcon from "../../libs/assets/svg/searchIcon.svg?react";
// styles
import styles from "./HeaderInput.module.scss";
import { HeaderSelect } from "@/widgets/headerCleverSearch/ui/HeaderSelect/HeaderSelect";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";
import { mokCategoriesData } from "@/pages/search/libs/constants/mokCategoriesData";
// import { useSearchParams } from "react-router-dom";

interface HeaderInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const HeaderInput: FC<HeaderInputProps> = ({ onChange, value }) => {
  const [selectedOption, setSelectedOption] = useState<IProductCategoryItem>(
    mokCategoriesData[0]
  );
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.HeaderInput}>
      <HeaderSelect
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className={styles.inputWrapper}>
        <input
          placeholder="Search Amazon"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={styles.rightSearchButton}>
        <SearchIcon />
      </div>
    </div>
  );
};
