// react
import { FC } from "react";
//assets
import amazon from "../../libs/assets/png/amazon.png";
// styles
import styles from "./AmazonLabel.module.scss";

interface AmazonLabelProps {}

export const AmazonLabel: FC<AmazonLabelProps> = ({}) => {
  return (
    <div className={styles.AmazonLabelWrapper}>
      <img src={amazon} className={styles.AmazonLabel} />
    </div>
  );
};
