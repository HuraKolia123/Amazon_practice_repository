// react
import { Dispatch, FC, SetStateAction, useState } from "react";
//assets
import CloseIcon from "../../assets/svg/ClearIcon.svg?react";
import Arrow from "../../assets/svg/Arror.svg?react";
// styles
import styles from "./MultiSelect.module.scss";
import { SelectedItemList } from "../SelectedItemList/SelectedItemList";
import { OptionItemList } from "../OptionItemList/OptionItemList";
import { ISelectedItem } from "../../model/selectedItem";
import { IOption } from "../../model/option";

interface MultiSelectProps {
  selectedItems: ISelectedItem[];
  setSelectedItem: Dispatch<SetStateAction<ISelectedItem[]>>;
  options: IOption[];
}

export const MultiSelect: FC<MultiSelectProps> = ({
  selectedItems,
  setSelectedItem,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const multiSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const deleteSelectedItems = () => {
    setSelectedItem([]);
  };

  return (
    <div className={styles.MultiSelect}>
      <div className={styles.top}>
        <div className={styles.leftPart}>
          <SelectedItemList selectedItems={selectedItems} />
        </div>
        <div className={styles.rightPart}>
          <CloseIcon
            onClick={deleteSelectedItems}
            style={{ cursor: "pointer" }}
          />
          <div className={styles.array} onClick={multiSelectToggle}>
            <Arrow style={{ transform: isOpen ? "rotate(180deg)" : "" }} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        {isOpen && (
          <OptionItemList
            options={options}
            pickOption={setSelectedItem}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};
