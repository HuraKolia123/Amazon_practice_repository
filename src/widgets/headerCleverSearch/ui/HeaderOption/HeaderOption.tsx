// react
import { FC } from "react";
// styles
import styles from "./HeaderOption.module.scss";

interface HeaderOptionProps {
  optionItem: string;
  pickOption: (value: string) => void;
}

export const HeaderOption: FC<HeaderOptionProps> = ({
  optionItem,
  pickOption,
}) => {
  const onChangeOptionClick = () => {
    pickOption(optionItem);
  };

  return (
    <div className={styles.HeaderOption} onClick={onChangeOptionClick}>
      {optionItem}
    </div>
  );
};
