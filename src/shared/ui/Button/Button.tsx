import { ReactNode, FC, memo, ButtonHTMLAttributes } from "react";
// libs
import clsx from "clsx";
// assets
import LoadingIcon from "@/shared/libs/assets/svg/loading.svg?react";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  leftIcon?: ReactNode;
  children?: ReactNode;
  rightIcon?: ReactNode;

  buttonSizeVariant?:
    | "extrasmall"
    | "small"
    | "medium"
    | "large"
    | "extralarge";
  buttonStyleVariant?: "Accent" | "Danger" | "Primary";
  buttonVariant?: "Fill" | "Outline" | "Ghost" | "Text";

  isLoading?: boolean;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(
  ({
    children,
    onClick,
    disabled,
    isLoading,
    leftIcon,
    rightIcon,
    buttonSizeVariant = "medium",
    buttonVariant = "Fill",
    buttonStyleVariant = "Accent",
    type,
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={clsx(styles.Button, {
          [styles.extrasmallButton]: buttonSizeVariant === "extrasmall",
          [styles.smallButton]: buttonSizeVariant === "small",
          [styles.mediumButton]: buttonSizeVariant === "medium",
          [styles.largeButton]: buttonSizeVariant === "large",
          [styles.extralargeButton]: buttonSizeVariant === "extralarge",

          [styles.buttonStyleAccentFill]:
            buttonStyleVariant === "Accent" && buttonVariant === "Fill",
          [styles.loading]: isLoading,
          [styles.buttonStylePrimaryFill]:
            buttonStyleVariant === "Primary" && buttonVariant === "Fill",
          [styles.buttonStyleDangerFill]:
            buttonStyleVariant === "Danger" && buttonVariant === "Fill",
          [styles.buttonStyleAccentOutline]:
            buttonStyleVariant === "Accent" && buttonVariant === "Outline",
          [styles.buttonStylePrimaryOutline]:
            buttonStyleVariant === "Primary" && buttonVariant === "Outline",
          [styles.buttonStyleDangerOutline]:
            buttonStyleVariant === "Danger" && buttonVariant === "Outline",
          [styles.buttonStyleAccentGhost]:
            buttonStyleVariant === "Accent" && buttonVariant === "Ghost",
          [styles.buttonStylePrimaryGhost]:
            buttonStyleVariant === "Primary" && buttonVariant === "Ghost",

          [styles.buttonStyleDangerGhost]:
            buttonStyleVariant === "Danger" && buttonVariant === "Ghost",

          [styles.buttonStyleAccentText]:
            buttonStyleVariant === "Accent" && buttonVariant === "Text",

          [styles.buttonStylePrimaryText]:
            buttonStyleVariant === "Primary" && buttonVariant === "Text",

          [styles.buttonStyleDangerText]:
            buttonStyleVariant === "Danger" && buttonVariant === "Text",
        })}
      >
        {isLoading && (
          <div className={styles.icon}>
            <LoadingIcon />
          </div>
        )}
        {leftIcon && !isLoading && (
          <div className={styles.icon}>{leftIcon}</div>
        )}
        {children}
        {rightIcon && !isLoading && (
          <div className={styles.icon}>{rightIcon}</div>
        )}
      </button>
    );
  }
);
