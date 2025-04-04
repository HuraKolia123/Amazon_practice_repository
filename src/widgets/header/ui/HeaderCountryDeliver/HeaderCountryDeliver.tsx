// react
import { FC } from "react";
//assets
import DeliverIcon from "@/shared/libs/assets/svg/deliver.svg?react";
// styles
import styles from "./HeaderCountryDeliver.module.scss";

interface HeaderCountryDeliverProps {
  country: string;
}

export const HeaderCountryDeliver: FC<HeaderCountryDeliverProps> = ({
  country,
}) => {
  return (
    <div className={styles.HeaderCountryDeliver}>
      <div className={styles.icon}>
        <DeliverIcon />
      </div>
      <div className={styles.text}>
        <div className={styles.deliverTo}>Deliver to</div>
        <div className={styles.country}>{country}</div>
      </div>
    </div>
  );
};
