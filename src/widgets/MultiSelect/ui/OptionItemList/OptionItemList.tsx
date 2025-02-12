// react
import { Dispatch, FC, SetStateAction } from "react";
// styles
import styles from "./OptionItemList.module.scss";
import { IOption } from "../../model/option";
import { OptionItem } from "../OptionItem/OptionItem";
import { ISelectedItem } from "../../model/selectedItem";

interface OptionItemListProps {
  options: IOption[];
  pickOption: Dispatch<SetStateAction<ISelectedItem[]>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const OptionItemList: FC<OptionItemListProps> = ({
  options,
  pickOption,
  setIsOpen,
}) => {
  return (
    <div className={styles.OptionItemList}>
      {options?.map((item, index) => {
        return (
          <OptionItem
            content={item.content}
            key={index}
            pickOption={pickOption}
            setIsOpen={setIsOpen}
          />
        );
      })}
    </div>
  );
};
