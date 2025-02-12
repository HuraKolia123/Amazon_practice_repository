// styles
import styles from "./Select.module.scss";
//react
import { FC, useEffect, useRef, useState } from "react";
//ui
import { OptionList } from "../OptionList/OptionList";
import DropDown from "../libs/assets/svg/DropDown.svg?react";

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

  const onArrowClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const onSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsSelectOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsSelectOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className={styles.container}>
      <div className={styles.Select} onClick={onArrowClick}>
        <div className={styles.defaultValue}>Sort by: {selectedOption}</div>
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
