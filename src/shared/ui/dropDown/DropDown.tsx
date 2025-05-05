// react
import { FC, ReactNode } from "react";
// styles
import styles from "./DropDown.module.scss";

interface DropDownProps {
  isOpen: boolean;
  maxWidth: string;
  children: ReactNode;
  dropDownContent: ReactNode;
}

export const DropDown: FC<DropDownProps> = ({
  children,
  isOpen,
  dropDownContent,
  maxWidth,
}) => {
  return (
    <div className={styles.DropDownContainer} style={{ maxWidth: maxWidth }}>
      <div>{children}</div>
      {isOpen && (
        <div className={styles.DropDown} style={{ maxWidth: maxWidth }}>
          {dropDownContent}
        </div>
      )}
    </div>
  );
};
