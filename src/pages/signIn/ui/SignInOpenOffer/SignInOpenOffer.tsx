// react
import { FC, useState } from "react";
//assets
import ChevronDown from "@/shared/libs/assets/svg/chevron_down.svg?react";
// styles
import styles from "./SignInOpenOffer.module.scss";

interface SignInOpenOfferProps {}

export const SignInOpenOffer: FC<SignInOpenOfferProps> = ({}) => {
  const [isOpenOffer, setIsOpenOffer] = useState(false);

  const offerToggle = () => {
    setIsOpenOffer(!isOpenOffer);
  };
  return (
    <>
      <div className={styles.textWithIcon} onClick={offerToggle}>
        <div
          className={styles.icon}
          style={{ transform: isOpenOffer ? "rotate(180deg)" : "" }}
        >
          <ChevronDown />
        </div>
        <div className={styles.helpedText}>Need help?</div>
      </div>
      {isOpenOffer && (
        <div className={styles.offer}>
          <div className={styles.helpedText}>Forgot your password?</div>
          <div className={styles.helpedText}>Other issues with Sign-In</div>
        </div>
      )}
    </>
  );
};
