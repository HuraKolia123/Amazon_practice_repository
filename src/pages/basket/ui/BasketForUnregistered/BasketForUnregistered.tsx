// react
import { FC } from "react";
//ui
import { Button } from "@/shared/ui/Button";
//assets
import UnregisteredIcon from "@/pages/basket/libs/assets/svg/unregisteredBasketSVG.svg?react";
// styles
import styles from "./BasketForUnregistered.module.scss";
import { Link } from "react-router-dom";
import {
  getSignInPageRoute,
  getSignUpPageRoute,
} from "@/shared/libs/constants/routes";

interface BasketForUnregisteredProps {}

export const BasketForUnregistered: FC<BasketForUnregisteredProps> = ({}) => {
  return (
    <div className={styles.content}>
      <div className={styles.topSide}>
        <div className={styles.leftIcon}>
          <UnregisteredIcon />
        </div>
        <div className={styles.rightPart}>
          <div className={styles.header}>Your Amazon Cart is empty</div>
          <div className={styles.todaysDeals}>Shop today's deals</div>
          <div className={styles.btnBlock}>
            <Link to={getSignInPageRoute()} className={styles.signInBtn}>
              <Button>Sign in to your account</Button>
            </Link>
            <Link to={getSignUpPageRoute()} className={styles.signUpBtn}>
              <Button>Sign up now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.middleSide}></div>
      <div className={styles.bottomSide}>
        <div className={styles.text}>
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price.<span> Learn more</span>
        </div>
        <div className={styles.text}>
          Do you have a gift card or promotional code? We'll ask you to enter
          your claim code when it's time to pay.
        </div>
      </div>
    </div>
  );
};
