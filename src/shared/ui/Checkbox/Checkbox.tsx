// styles
import { FC, ReactNode, useState } from "react";
import styles from "./Checkbox.module.scss";
import TickWhite from "@/shared/libs/assets/svg/tickWhite.svg?react";
import TickBlack from "@/shared/libs/assets/svg/tickBlack.svg?react";

interface CheckboxProps {
  tickWhite?: ReactNode;
  tickBlack?: ReactNode;
}

export const Checkbox: FC<CheckboxProps> = ({}) => {
  const [chose, setChose] = useState(true);

  const isChoseClick = () => {
    setChose(!chose);
  };

  return (
    <div className={styles.Checkbox} onClick={isChoseClick}>
      {chose ? (
        <div className={styles.tickWhite}>{<TickWhite />}</div>
      ) : (
        <div className={styles.tickBlack}>{<TickBlack />}</div>
      )}
    </div>
  );
};
