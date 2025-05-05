// react
import { FC, ReactNode } from "react";
// styles
import styles from "./Badge.module.scss";
//helpers
import { getAdditionalBadgeTypeVariant } from "./libs/helpers/getAdditionalBadgeVariant";
import { getBadgeStyles } from "./libs/helpers/getBadgeStyles";

export interface BadgeProps {
  avatarURL?: string;
  countryCode?: string;
  label?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  heightBadgeVariants?: "small" | "medium" | "large";
  mainTypeBadgeVariant: "Subtle" | "Outline" | "Solid" | "Soft";
  additionalTypeBadgeVariant?:
    | "default"
    | "dot"
    | "closeButton"
    | "iconTrailing"
    | "iconLeading"
    | "loading";
  contextualBadgeVariants?:
    | "success"
    | "informative"
    | "danger"
    | "warning"
    | "neutral";
  noncontextualBadgeVariants?:
    | "blueLight"
    | "blue"
    | "indigo"
    | "purple"
    | "pink"
    | "orange"
    | "blueGray"
    | "grayBlue";
}

export const Badge: FC<BadgeProps> = ({
  avatarURL,
  iconBefore,
  iconAfter,
  label,
  heightBadgeVariants = "medium",
  contextualBadgeVariants = "informative",
  mainTypeBadgeVariant,
  additionalTypeBadgeVariant = "default",
  countryCode,
}) => {
  return (
    <div
      className={getBadgeStyles({
        contextualBadgeVariants: contextualBadgeVariants,
        heightBadgeVariants: heightBadgeVariants,
        mainTypeBadgeVariant: mainTypeBadgeVariant,
      })}
    >
      {getAdditionalBadgeTypeVariant({
        additionalTypeBadgeVariant: additionalTypeBadgeVariant,
        avatarURL: avatarURL,
        contextualBadgeVariants: contextualBadgeVariants,
        mainTypeBadgeVariant: mainTypeBadgeVariant,
        countryCode: countryCode,
      })}
      {iconBefore && additionalTypeBadgeVariant === "default" && (
        <span className={styles.iconBefore}>{iconBefore}</span>
      )}
      {label}
      {iconAfter && additionalTypeBadgeVariant === "default" && (
        <span className={styles.iconAfter}>{iconAfter}</span>
      )}
    </div>
  );
};
