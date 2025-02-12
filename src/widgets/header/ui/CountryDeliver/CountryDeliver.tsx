// react
import { FC } from "react";
//assets
import DeliverIcon from "../../libs/assets/svg/deliver.svg?react";
// styles
import styles from "./CountryDeliver.module.scss";

interface CountryDeliverProps {
  country: string;
}

export const CountryDeliver: FC<CountryDeliverProps> = ({ country }) => {
  return (
    <div className={styles.CountryDeliver}>
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
