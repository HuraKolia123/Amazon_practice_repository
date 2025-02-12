// react
import { Dispatch, FC, SetStateAction } from "react";
// styles
import styles from "./OptionItem.module.scss";
import { IOption } from "../../model/option";
import { ISelectedItem } from "../../model/selectedItem";

interface OptionItemProps extends IOption {
  pickOption: Dispatch<SetStateAction<ISelectedItem[]>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const OptionItem: FC<OptionItemProps> = ({
  setIsOpen,
  content,
  pickOption,
  ...optionFields
}) => {
  const addOption = () => {
    pickOption((prev) => [...prev, { content, ...optionFields }]);
    setIsOpen(false);
  };

  return (
    <div className={styles.OptionItem} onClick={addOption}>
      {content}
    </div>
  );
};
