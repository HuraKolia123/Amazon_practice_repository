//types
import { BadgeProps } from "../../Badge";
// assets
import DotDefault from "@/shared/ui/Badge/libs/assets/svg/dotDefault.svg?react";
import CloseButton from "@/shared/ui/Badge/libs/assets/svg/closeButton.svg?react";
import IconTrailing from "@/shared/ui/Badge/libs/assets/svg/iconTrailing.svg?react";
import IconLeading from "@/shared/ui/Badge/libs/assets/svg/iconLeading.svg?react";
import IconLoading from "@/shared/ui/Badge/libs/assets/svg/iconLoading.svg?react";
//libs
import clsx from "clsx";
//styles
import styles from "../../Badge.module.scss";

interface getAdditionalBadgeTypeVariantProps
  extends Pick<
    BadgeProps,
    | "avatarURL"
    | "countryCode"
    | "contextualBadgeVariants"
    | "mainTypeBadgeVariant"
  > {
  additionalTypeBadgeVariant:
    | BadgeProps["additionalTypeBadgeVariant"]
    | "country"
    | "avatar";
}

export const getAdditionalBadgeTypeVariant = ({
  additionalTypeBadgeVariant,
  avatarURL,
  contextualBadgeVariants,
  countryCode,
  mainTypeBadgeVariant,
}: getAdditionalBadgeTypeVariantProps) => {
  if (avatarURL) {
    additionalTypeBadgeVariant = "avatar";
  }

  if (countryCode) {
    additionalTypeBadgeVariant = "country";
  }

  switch (additionalTypeBadgeVariant) {
    case "default": {
      return;
    }

    case "dot": {
      return (
        <div
          className={clsx(styles.dot, {
            [styles.dotSubtleInformative]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "informative",
            [styles.dotSubtleDanger]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "danger",
            [styles.dotSubtleWarning]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "warning",
            [styles.dotSubtleSuccess]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "success",
            [styles.dotSubtleNeutral]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "neutral",
            [styles.dotOutlineInformative]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "informative",
            [styles.dotOutlineDanger]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "danger",
            [styles.dotOutlineWarning]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "warning",
            [styles.dotOutlineSuccess]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "success",
            [styles.dotOutlineNeutral]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "neutral",
            [styles.dotSolidInformative]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "informative",
            [styles.dotSolidDanger]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "danger",
            [styles.dotSolidWarning]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "warning",
            [styles.dotSolidSuccess]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "success",
            [styles.dotSolidNeutral]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "neutral",
            [styles.dotSoftInformative]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "informative",
            [styles.dotSoftDanger]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "danger",
            [styles.dotSoftWarning]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "warning",
            [styles.dotSoftSuccess]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "success",
            [styles.dotSoftNeutral]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "neutral",
          })}
        >
          <DotDefault />
        </div>
      );
    }

    case "avatar": {
      return <img src={avatarURL} />;
    }

    case "country": {
      return (
        <img
          className={styles.countryFlag}
          src={`https://flagcdn.com/${countryCode?.toLowerCase()}.svg`}
          alt={countryCode}
        />
      );
    }
    case "closeButton": {
      return (
        <div
          className={clsx(styles.closeButton, {
            [styles.closeBtnSubtleInformative]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "informative",
            [styles.closeBtnSubtleDanger]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "danger",
            [styles.closeBtnSubtleWarning]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "warning",
            [styles.closeBtnSubtleSuccess]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "success",
            [styles.closeBtnSubtleNeutral]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "neutral",
            [styles.closeBtnOutlineInformative]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "informative",
            [styles.closeBtnOutlineDanger]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "danger",
            [styles.closeBtnOutlineWarning]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "warning",
            [styles.closeBtnOutlineSuccess]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "success",
            [styles.closeBtnOutlineNeutral]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "neutral",
            [styles.closeBtnSolidInformative]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "informative",
            [styles.closeBtnSolidDanger]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "danger",
            [styles.closeBtnSolidWarning]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "warning",
            [styles.closeBtnSolidSuccess]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "success",
            [styles.closeBtnSolidNeutral]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "neutral",
            [styles.closeBtnSoftInformative]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "informative",
            [styles.closeBtnSoftDanger]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "danger",
            [styles.closeBtnSoftWarning]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "warning",
            [styles.closeBtnSoftSuccess]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "success",
            [styles.closeBtnSoftNeutral]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "neutral",
          })}
        >
          <CloseButton />
        </div>
      );
    }
    case "iconTrailing": {
      return (
        <div
          className={clsx(styles.iconTrailing, {
            [styles.iconTrlSubtleInformative]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "informative",
            [styles.iconTrlSubtleDanger]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "danger",
            [styles.iconTrlSubtleWarning]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "warning",
            [styles.iconTrlSubtleSuccess]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "success",
            [styles.iconTrlSubtleNeutral]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "neutral",
            [styles.iconTrlOutlineInformative]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "informative",
            [styles.iconTrlOutlineDanger]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "danger",
            [styles.iconTrlOutlineWarning]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "warning",
            [styles.iconTrlOutlineSuccess]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "success",
            [styles.iconTrlOutlineNeutral]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "neutral",
            [styles.iconTrlSolidInformative]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "informative",
            [styles.iconTrlSolidDanger]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "danger",
            [styles.iconTrlSolidWarning]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "warning",
            [styles.iconTrlSolidSuccess]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "success",
            [styles.iconTrlSolidNeutral]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "neutral",
            [styles.iconTrlSoftInformative]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "informative",
            [styles.iconTrlSoftDanger]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "danger",
            [styles.iconTrlSoftWarning]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "warning",
            [styles.iconTrlSoftSuccess]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "success",
            [styles.iconTrlSoftNeutral]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "neutral",
          })}
        >
          <IconTrailing />
        </div>
      );
    }
    case "iconLeading": {
      return (
        <div
          className={clsx(styles.iconLeading, {
            [styles.iconLeadingSubtleInformative]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "informative",
            [styles.iconLeadingSubtleDanger]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "danger",
            [styles.iconLeadingSubtleWarning]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "warning",
            [styles.iconLeadingSubtleSuccess]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "success",
            [styles.iconLeadingSubtleNeutral]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "neutral",
            [styles.iconLeadingOutlineInformative]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "informative",
            [styles.iconLeadingOutlineDanger]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "danger",
            [styles.iconLeadingOutlineWarning]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "warning",
            [styles.iconLeadingOutlineSuccess]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "success",
            [styles.iconLeadingOutlineNeutral]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "neutral",
            [styles.iconLeadingSolidInformative]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "informative",
            [styles.iconLeadingSolidDanger]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "danger",
            [styles.iconLeadingSolidWarning]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "warning",
            [styles.iconLeadingSolidSuccess]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "success",
            [styles.iconLeadingSolidNeutral]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "neutral",
            [styles.iconLeadingSoftInformative]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "informative",
            [styles.iconLeadingSoftDanger]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "danger",
            [styles.iconLeadingSoftWarning]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "warning",
            [styles.iconLeadingSoftSuccess]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "success",
            [styles.iconLeadingSoftNeutral]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "neutral",
          })}
        >
          <IconLeading />
        </div>
      );
    }
    case "loading": {
      return (
        <div
          className={clsx(styles.iconLoading, {
            [styles.iconLoadingSubtleInformative]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "informative",
            [styles.iconLoadingSubtleDanger]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "danger",
            [styles.iconLoadingSubtleWarning]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "warning",
            [styles.iconLoadingSubtleSuccess]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "success",
            [styles.iconLoadingSubtleNeutral]:
              mainTypeBadgeVariant === "Subtle" &&
              contextualBadgeVariants === "neutral",
            [styles.iconLoadingOutlineInformative]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "informative",
            [styles.iconLoadingOutlineDanger]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "danger",
            [styles.iconLoadingOutlineWarning]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "warning",
            [styles.iconLoadingOutlineSuccess]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "success",
            [styles.iconLoadingOutlineNeutral]:
              mainTypeBadgeVariant === "Outline" &&
              contextualBadgeVariants === "neutral",
            [styles.iconLoadingSolidInformative]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "informative",
            [styles.iconLoadingSolidDanger]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "danger",
            [styles.iconLoadingSolidWarning]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "warning",
            [styles.iconLoadingSolidSuccess]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "success",
            [styles.iconLoadingSolidNeutral]:
              mainTypeBadgeVariant === "Solid" &&
              contextualBadgeVariants === "neutral",
            [styles.iconLoadingSoftInformative]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "informative",
            [styles.iconLoadingSoftDanger]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "danger",
            [styles.iconLoadingSoftWarning]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "warning",
            [styles.iconLoadingSoftSuccess]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "success",
            [styles.iconLoadingSoftNeutral]:
              mainTypeBadgeVariant === "Soft" &&
              contextualBadgeVariants === "neutral",
          })}
        >
          <IconLoading />
        </div>
      );
    }
  }
};
