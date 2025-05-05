// react
import { FC } from "react";
// styles
import styles from "./SocialButton.module.scss";
//assets
import Google from "@/shared/ui/SocialButton/libs/assets/svg/Google.svg?react";
import Facebook from "@/shared/ui/SocialButton/libs/assets/svg/Facebook.svg?react";
import Apple from "@/shared/ui/SocialButton/libs/assets/svg/Apple.svg?react";
import Twitter from "@/shared/ui/SocialButton/libs/assets/svg/Twitter.svg?react";
import Figma from "@/shared/ui/SocialButton/libs/assets/svg/Figma.svg?react";
import Dribbble from "@/shared/ui/SocialButton/libs/assets/svg/Drible.svg?react";
//libs
import clsx from "clsx";

interface SocialButtonProps {
  // icon?: ReactNode;
  styleVariant?: "colored" | "white" | "blackWhite";
  companyIcon: "google" | "facebook" | "apple" | "twitter" | "figma" | "drible";
  onClick: () => void;
  isIconMode?: boolean;
}

export const SocialButton: FC<SocialButtonProps> = ({
  companyIcon,
  styleVariant = "colored",
  isIconMode = false,
  onClick,
}) => {
  const getCompanyIcon = () => {
    switch (companyIcon) {
      case "google": {
        return (
          <>
            <div
              className={clsx(styles.google, {
                [styles.googleIconBlackWhite]:
                  styleVariant === "blackWhite" && companyIcon === "google",
              })}
            >
              <div className={styles.icon}>
                <Google />
              </div>
            </div>
            {!isIconMode && (
              <div className={styles.text}>Sign in with Google</div>
            )}
          </>
        );
      }
      case "facebook": {
        return (
          <>
            <div
              className={clsx(styles.facebook, {
                [styles.facebookIconWhite]:
                  styleVariant === "white" && companyIcon === "facebook",
                [styles.facebookIconBlackWhite]:
                  styleVariant === "blackWhite" && companyIcon === "facebook",
              })}
            >
              <div className={styles.icon}>
                <Facebook />
              </div>
            </div>
            {!isIconMode && (
              <div className={styles.text}>Sign in with Facebook</div>
            )}
          </>
        );
      }
      case "apple": {
        return (
          <>
            <div className={styles.apple}>
              <div className={styles.icon}>
                <Apple />
              </div>
            </div>
            {!isIconMode && (
              <div className={styles.text}>Sign in with Apple</div>
            )}
          </>
        );
      }
      case "twitter": {
        return (
          <>
            <div className={styles.twitter}>
              <div className={styles.icon}>
                <Twitter />
              </div>
            </div>
            {!isIconMode && <div className={styles.text}>Sign in with X</div>}
          </>
        );
      }
      case "figma": {
        return (
          <>
            <div className={styles.figma}>
              <div className={styles.icon}>
                <Figma />
              </div>
            </div>
            {!isIconMode && (
              <div className={styles.text}>Sign in with Figma</div>
            )}
          </>
        );
      }
      case "drible": {
        return (
          <>
            <div className={styles.drible}>
              <div className={styles.icon}>
                <Dribbble />
              </div>
            </div>
            {!isIconMode && (
              <div className={styles.text}>Sign in with Dribbble</div>
            )}
          </>
        );
      }
    }
  };

  return (
    <button
      onClick={onClick}
      className={clsx(styles.SocialButton, {
        [styles.coloredGoogle]:
          styleVariant === "colored" && companyIcon === "google",
        [styles.whiteGoogle]:
          styleVariant === "white" && companyIcon === "google",
        [styles.blackWhiteGoogle]:
          styleVariant === "blackWhite" && companyIcon === "google",

        [styles.coloredFacebook]:
          styleVariant === "colored" && companyIcon === "facebook",
        [styles.whiteFacebook]:
          styleVariant === "white" && companyIcon === "facebook",
        [styles.blackWhiteFacebook]:
          styleVariant === "blackWhite" && companyIcon === "facebook",

        [styles.coloredApple]:
          styleVariant === "colored" && companyIcon === "apple",
        [styles.whiteApple]:
          styleVariant === "white" && companyIcon === "apple",
        [styles.blackWhiteApple]:
          styleVariant === "blackWhite" && companyIcon === "apple",

        [styles.coloredTwitter]:
          styleVariant === "colored" && companyIcon === "twitter",
        [styles.whiteTwitter]:
          styleVariant === "white" && companyIcon === "twitter",
        [styles.blackWhiteTwitter]:
          styleVariant === "blackWhite" && companyIcon === "twitter",

        [styles.coloredFigma]:
          styleVariant === "colored" && companyIcon === "figma",
        [styles.whiteFigma]:
          styleVariant === "white" && companyIcon === "figma",
        [styles.blackWhiteFigma]:
          styleVariant === "blackWhite" && companyIcon === "figma",

        [styles.coloredDribbble]:
          styleVariant === "colored" && companyIcon === "drible",
        [styles.whiteDribbble]:
          styleVariant === "white" && companyIcon === "drible",
        [styles.blackWhiteDribbble]:
          styleVariant === "blackWhite" && companyIcon === "drible",
      })}
    >
      {getCompanyIcon()}
    </button>
  );
};
