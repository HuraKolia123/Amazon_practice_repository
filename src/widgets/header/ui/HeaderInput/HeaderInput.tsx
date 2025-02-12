// react
import { FC } from "react";
//assets
import SearchIcon from "../../libs/assets/svg/searchIcon.svg?react";
// styles
import styles from "./HeaderInput.module.scss";

interface HeaderInputProps {}

export const HeaderInput: FC<HeaderInputProps> = ({}) => {
  return (
    <div className={styles.HeaderInput}>
      <div className={styles.inputWrapper}>
        <input
          placeholder="Search Amazon"
          type="text"
          value={""}
          onChange={() => {}}
        />
      </div>
      <div className={styles.rightSearchButton}>
        <SearchIcon />
      </div>
    </div>
  );
};
