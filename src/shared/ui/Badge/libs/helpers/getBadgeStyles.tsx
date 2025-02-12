//types
import { BadgeProps } from "../../Badge";

//libs
import clsx from "clsx";

//styles
import styles from "../../Badge.module.scss";

type getBadgeStylesProps = Pick<
  BadgeProps,
  "heightBadgeVariants" | "contextualBadgeVariants" | "mainTypeBadgeVariant"
>;

export const getBadgeStyles = ({
  contextualBadgeVariants,
  heightBadgeVariants,
  mainTypeBadgeVariant,
}: getBadgeStylesProps) => {
  return clsx(styles.Badge, {
    [styles.heightBadgeSmall]: heightBadgeVariants === "small",
    [styles.heightBadgeMedium]: heightBadgeVariants === "medium",
    [styles.heightBadgeLarge]: heightBadgeVariants === "large",
    [styles.subtleInformative]:
      mainTypeBadgeVariant === "Subtle" &&
      contextualBadgeVariants === "informative",
    [styles.subtleDanger]:
      mainTypeBadgeVariant === "Subtle" && contextualBadgeVariants === "danger",
    [styles.subtleWarning]:
      mainTypeBadgeVariant === "Subtle" &&
      contextualBadgeVariants === "warning",
    [styles.subtleSuccess]:
      mainTypeBadgeVariant === "Subtle" &&
      contextualBadgeVariants === "success",
    [styles.subtleNeutral]:
      mainTypeBadgeVariant === "Subtle" &&
      contextualBadgeVariants === "neutral",
    [styles.outlineInformative]:
      mainTypeBadgeVariant === "Outline" &&
      contextualBadgeVariants === "informative",
    [styles.outlineDanger]:
      mainTypeBadgeVariant === "Outline" &&
      contextualBadgeVariants === "danger",
    [styles.outlineWarning]:
      mainTypeBadgeVariant === "Outline" &&
      contextualBadgeVariants === "warning",
    [styles.outlineSuccess]:
      mainTypeBadgeVariant === "Outline" &&
      contextualBadgeVariants === "success",
    [styles.outlineNeutral]:
      mainTypeBadgeVariant === "Outline" &&
      contextualBadgeVariants === "neutral",
    [styles.solidInformative]:
      mainTypeBadgeVariant === "Solid" &&
      contextualBadgeVariants === "informative",
    [styles.solidDanger]:
      mainTypeBadgeVariant === "Solid" && contextualBadgeVariants === "danger",
    [styles.solidWarning]:
      mainTypeBadgeVariant === "Solid" && contextualBadgeVariants === "warning",
    [styles.solidSuccess]:
      mainTypeBadgeVariant === "Solid" && contextualBadgeVariants === "success",
    [styles.solidNeutral]:
      mainTypeBadgeVariant === "Solid" && contextualBadgeVariants === "neutral",
    [styles.softInformative]:
      mainTypeBadgeVariant === "Soft" &&
      contextualBadgeVariants === "informative",
    [styles.softDanger]:
      mainTypeBadgeVariant === "Soft" && contextualBadgeVariants === "danger",
    [styles.softWarning]:
      mainTypeBadgeVariant === "Soft" && contextualBadgeVariants === "warning",
    [styles.softSuccess]:
      mainTypeBadgeVariant === "Soft" && contextualBadgeVariants === "success",
    [styles.softNeutral]:
      mainTypeBadgeVariant === "Soft" && contextualBadgeVariants === "neutral",
  });
};
