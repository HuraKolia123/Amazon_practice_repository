// react
import { FC } from "react";
//ui
import { HorizontalLine } from "@/shared/ui/HorizontalLine";
import { SignUpForm } from "../SignUpForm";
//assets
import Logo from "@/shared/libs/assets/png/amazonWhiteBg.png";
// styles
import styles from "./SignUpPage.module.scss";
import { Link } from "react-router-dom";
import { getSignInPageRoute } from "@/shared/libs/constants/routes";

interface SignUpPageProps {}

export const SignUpPage: FC<SignUpPageProps> = ({}) => {
  return (
    <div className={styles.SignUpPage}>
      <div className={styles.topLogo}>
        <img src={Logo} alt="amazon logo" />
      </div>
      <div className={styles.borderBlock}>
        <div className={styles.title}>Create account</div>
        <SignUpForm />
        <div className={styles.bottomSideBlock}>
          <p className={styles.additionalTextAndLink}>
            By creating an account, you agree to Amazon's
            <span> Conditions of Use</span> and
            <span> Privacy Notice.</span>
          </p>
          <HorizontalLine />
          <div className={styles.questionBlock}>
            <div className={styles.question}>Buying for work?</div>
            <div className={styles.creatingNewAcc}>
              Create a free business account
            </div>
            <HorizontalLine />
          </div>
        </div>
        <div className={styles.lastQuestion}>
          Already have an account?
          <Link to={getSignInPageRoute()} className={styles.signInBtn}>
            <span> Sign in</span>
          </Link>
        </div>
      </div>
      <div className={styles.helpingBlock}>
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
    </div>
  );
};
