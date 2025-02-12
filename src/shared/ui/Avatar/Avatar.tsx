// react
import { FC } from "react";
//assets
import OnlineIcon from "@/shared/ui/Avatar/libs/assets/svg/online.svg?react";
import CompanyIcon from "@/shared/ui/Avatar/libs/assets/svg/companyIcon.svg?react";
import VerifiedIcon from "@/shared/ui/Avatar/libs/assets/svg/verifiedIcon.svg?react";
import defaultAvatar from "@/shared/ui/Avatar/libs/assets/png/defaultAvatar.png";
// libs
import clsx from "clsx";
// styles
import styles from "./Avatar.module.scss";

interface AvatarProps {
  onClick: () => void;
  avatarSizeVariant: "24px" | "32px" | "40px" | "48px" | "56px" | "64px";
  avatarURL?: string;
  indicatorVariant?: "none" | "online" | "verified" | "company";
  userInfo?: {
    name: string;
    lastname: string;
  };
}

export const Avatar: FC<AvatarProps> = ({
  avatarURL,
  onClick,
  avatarSizeVariant,
  indicatorVariant = "none",
  userInfo = null,
}) => {
  const getCurrentIndicator = () => {
    switch (indicatorVariant) {
      case "none": {
        return;
      }

      case "online": {
        return <OnlineIcon />;
      }
      case "company": {
        return <CompanyIcon />;
      }
      case "verified": {
        return <VerifiedIcon />;
      }
    }
  };

  const avatarContainerStyles = clsx(styles.avatarWrapper, styles.imgStyles, {
    [styles.avatarSizeVariant24px]: avatarSizeVariant === "24px",
    [styles.avatarSizeVariant32px]: avatarSizeVariant === "32px",
    [styles.avatarSizeVariant40px]: avatarSizeVariant === "40px",
    [styles.avatarSizeVariant48px]: avatarSizeVariant === "48px",
    [styles.avatarSizeVariant56px]: avatarSizeVariant === "56px",
    [styles.avatarSizeVariant64px]: avatarSizeVariant === "64px",
  });

  const iconIndicatorStyles = clsx(styles.icon, {
    [styles.iconBelow24px]: avatarSizeVariant === "24px",
    [styles.iconBelow32px]: avatarSizeVariant === "32px",
    [styles.iconBelow40px]: avatarSizeVariant === "40px",
    [styles.iconBelow48px]: avatarSizeVariant === "48px",
    [styles.iconBelow56px]: avatarSizeVariant === "56px",
    [styles.iconBelow64px]: avatarSizeVariant === "64px",
  });

  const indicatorVariantNone = indicatorVariant === "none";

  const currentAvatar = avatarURL ? avatarURL : defaultAvatar;

  const firstLetterOfName = userInfo?.name[0].toUpperCase();

  const firstLetterOfLastname = userInfo?.lastname[0].toUpperCase();

  return (
    <div className={avatarContainerStyles} onClick={onClick}>
      {!userInfo ? (
        <img src={currentAvatar} />
      ) : (
        <div
          className={clsx(styles.userInfoCircle, {
            [styles.fzAt24pxSize]: avatarSizeVariant === "24px",
            [styles.fzAt32pxSize]: avatarSizeVariant === "32px",
            [styles.fzAt40pxSize]: avatarSizeVariant === "40px",
            [styles.fzAt48pxSize]: avatarSizeVariant === "48px",
            [styles.fzAt56pxSize]: avatarSizeVariant === "56px",
            [styles.fzAt64pxSize]: avatarSizeVariant === "64px",
          })}
        >
          {firstLetterOfName} {firstLetterOfLastname}
        </div>
      )}
      {!indicatorVariantNone && (
        <span className={iconIndicatorStyles}>{getCurrentIndicator()}</span>
      )}
    </div>
  );
};
