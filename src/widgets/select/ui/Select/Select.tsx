// styles
import styles from "./Select.module.scss";
//react
import { FC, useRef, useState } from "react";
// hooks
import { useClickOutside } from "@/shared/libs/hooks/useClickOutside";
// assets
import DropDown from "../../libs/assets/svg/DropDown.svg?react";
//ui
import { OptionList } from "../OptionList/OptionList";

interface SelectProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}

export const Select: FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const onIsSelectOpenToggle = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  useClickOutside(selectRef, () => setIsSelectOpen(false));

  const onSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsSelectOpen(false);
  };

  return (
    <div ref={selectRef} className={styles.container}>
      <div className={styles.Select} onClick={onIsSelectOpenToggle}>
        <div className={styles.defaultValue}>
          Sort by: {!selectedOption ? "Relevance" : selectedOption}
        </div>
        <div className={styles.icon}>
          <DropDown />
        </div>
      </div>
      <div className={styles.bottomSide}>
        {isSelectOpen && (
          <OptionList pickOption={onSelectOption} options={options} />
        )}
      </div>
    </div>
  );
};
