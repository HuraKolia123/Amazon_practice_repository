// react
import { FC } from "react";
//assets
import SignIn from "../../libs/assets/png/SignIn.png";

// styles
import styles from "./HeaderDrawerTopSide.module.scss";

interface HeaderDrawerTopSideProps {}

export const HeaderDrawerTopSide: FC<HeaderDrawerTopSideProps> = ({}) => {
  return (
    <div className={styles.topDrawerSide}>
      <div className={styles.photo}>
        <img src={SignIn} alt="sign in..." />
      </div>
      <div className={styles.text}> Hello, sign in</div>
    </div>
  );
};
