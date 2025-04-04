// react
import { FC } from "react";
//ui
import { Button } from "@/shared/ui/Button";
import { HorizontalLine } from "@/shared/ui/HorizontalLine";
import { SignInOpenOffer } from "../SignInOpenOffer/SignInOpenOffer";
import { SignInForm } from "../SignInForm";
//assets
import Logo from "@/shared/libs/assets/png/amazonWhiteBg.png";
// styles
import styles from "./SignInPage.module.scss";
import { Link } from "react-router-dom";
import { getSignUpPageRoute } from "@/shared/libs/constants/routes";

interface SignInPageProps {}

export const SignInPage: FC<SignInPageProps> = ({}) => {
  return (
    <div className={styles.SignInPage}>
      <div className={styles.borderBlock}>
        <div className={styles.topLogo}>
          <img src={Logo} alt="amazon logo" />
        </div>
        <div className={styles.signInBlock}>
          <div className={styles.title}>Sign in</div>

          <SignInForm />
        </div>
        <div className={styles.middleBlock}>
          <p className={styles.additionalTextAndLink}>
            By continuing, you agree to Amazon's <span>Conditions of Use</span>{" "}
            and <span>Privacy Notice</span>.
          </p>

          <div className={styles.needHelpBlock}>
            <div className={styles.blockWithoutOffer}>
              <SignInOpenOffer />
            </div>
            <HorizontalLine />
          </div>

          <div className={styles.amazonBusinessBlock}>
            <div className={styles.question}>Buying for work?</div>
            <div className={styles.amazonBusinessLink}>
              Shop on Amazon Business
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lowerBlock}>
        <HorizontalLine />
        <div className={styles.newToAmazon}>New to Amazon?</div>
        <Link to={getSignUpPageRoute()} className={styles.creatingBtn}>
          <Button onClick={() => {}}>Create your Amazon account</Button>
        </Link>
      </div>
      <HorizontalLine />

      <div className={styles.bottomInfoBlock}>
        <div className={styles.categories}>
          <div className={styles.category}>Conditions of Use</div>
          <div className={styles.category}>Privacy Notice</div>
          <div className={styles.category}>Help</div>
        </div>
        <div className={styles.yearsOfFoundation}>
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};
