// react
import { FC } from "react";
//assets
import ChevronDown from "@/shared/libs/assets/svg/chevron_down.svg?react";
// styles
import styles from "./CountryToggle.module.scss";

interface CountryToggleProps {
  flag: string;
  countryInitials: string;
}

export const CountryToggle: FC<CountryToggleProps> = ({
  countryInitials,
  flag,
}) => {
  return (
    <div className={styles.CountryToggle}>
      <div className={styles.flag}>
        <img src={flag} alt="Flag!" width={21.6} height={16.2} />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.initials}>{countryInitials}</div>
        <div className={styles.icon}>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};
