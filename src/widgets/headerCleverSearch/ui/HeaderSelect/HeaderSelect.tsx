// react
import { FC, useState } from "react";
//assets
import ChevronDown from "../../../header/libs/assets/svg/chevron_down.svg?react";
// styles
import styles from "./HeaderSelect.module.scss";
import { HeaderOptionList } from "../HeaderOptionList/HeaderOptionList";

interface HeaderSelectProps {
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}

const optionsArray = [
  "Baby",
  "Electrolnics",
  "Automotive",
  "Deals",
  "All Departments",
  "Digital music",
  "Luggage",
];

export const HeaderSelect: FC<HeaderSelectProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectToggle = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const onSelectOption = (value: string) => {
    setSelectedOption(value);
    setIsSelectOpen(false);
  };
  return (
    <>
      <div className={styles.HeaderSelect} onClick={selectToggle}>
        <div className={styles.text}>{selectedOption}</div>
        <div className={styles.openingIcon}>
          <ChevronDown />
        </div>
      </div>
      {isSelectOpen && (
        <div className={styles.selectContent}>
          <HeaderOptionList
            optionItems={optionsArray}
            pickOption={onSelectOption}
          />
        </div>
      )}
    </>
  );
};
