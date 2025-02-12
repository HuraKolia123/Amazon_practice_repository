// react
import { FC } from "react";
// styles
import styles from "./HeaderOptionList.module.scss";
import { HeaderOption } from "../HeaderOption/HeaderOption";

interface HeaderOptionListProps {
  optionItems: string[];
  pickOption: (value: string) => void;
}

export const HeaderOptionList: FC<HeaderOptionListProps> = ({
  optionItems,
  pickOption,
}) => {
  return (
    <div className={styles.HeaderOptionList}>
      {optionItems.map((item) => {
        return (
          <HeaderOption optionItem={item} pickOption={pickOption} key={item} />
        );
      })}
    </div>
  );
};
