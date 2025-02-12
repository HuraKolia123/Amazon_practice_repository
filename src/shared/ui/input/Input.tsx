// react
import {
  ChangeEvent,
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  ReactNode,
  useState,
} from "react";
// styles
import styles from "./Input.module.scss";
import clsx from "clsx";
import { InfoIcon } from "../InfoIcon/InfoIcon";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: any;
  value: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  label?: string;
  helperText?: string;
  maxWidth?: CSSProperties["maxWidth"];
  inputSize?: "extrasmall" | "medium" | "large" | "extralarge";
  isBorderDisabled?: boolean;
  isRequired?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  shortKeyIcon?: ReactNode;
  infoText?: string;

  // leftIconError?: ReactNode;
  // rightIconError?: ReactNode;
}

export const Input: FC<InputProps> = ({
  onChange,
  type = "text",
  value,
  placeholder,
  onKeyDown,
  helperText,
  label,
  maxWidth = "323px",
  inputSize = "medium",
  isBorderDisabled = false,
  isRequired = false,
  isError = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  shortKeyIcon,
  infoText,
  // leftIconError,
  // rightIconError,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusedToggle = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div className={styles.inputContent} style={{ maxWidth: maxWidth }}>
      <div className={styles.labelContent}>
        {label && (
          <label
            htmlFor="input"
            className={clsx(styles.label, {
              [styles.labelSmall]:
                inputSize === "extrasmall" || inputSize === "medium",
              [styles.labelLarge]:
                inputSize === "large" || inputSize === "extralarge",
              [styles.labelDisabled]: isDisabled,
            })}
          >
            {label}
            {isRequired && <span className={styles.required}>*</span>}
          </label>
        )}
        {infoText && <InfoIcon text={infoText} />}
      </div>
      <div
        className={clsx(styles.inputWrapper, {
          [styles.focusStyles]: isFocused && !isError,
          [styles.inputSize24px]: inputSize === "extrasmall",
          [styles.inputSize36px]: inputSize === "medium",
          [styles.inputSize40px]: inputSize === "large",
          [styles.inputSize48px]: inputSize === "extralarge",
          [styles.inputWrapperBorderDisabled]: isBorderDisabled,
          [styles.inputWrapperBorderError]: isError && !isDisabled,
          [styles.inputWrapperErrorFocused]: isFocused && isError,
          [styles.inputWrapperDisabled]: isDisabled,
        })}
        onFocus={focusedToggle}
        onBlur={focusedToggle}
      >
        {leftIcon && <div className={styles.icon}>{leftIcon}</div>}
        <input
          id="input"
          disabled={isDisabled}
          className={clsx(styles.Input, {
            [styles.inputFontSizeSmall]:
              inputSize === "extrasmall" || inputSize === "medium",
            [styles.inputFontSizeLarge]:
              inputSize === "large" || inputSize === "extralarge",
            [styles.inputDisabled]: isDisabled,
          })}
          onChange={onChange}
          type={type}
          value={value}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
        {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
        {shortKeyIcon && (
          <div className={styles.shortKeyIcon}>{shortKeyIcon}</div>
        )}
      </div>
      {helperText && (
        <div
          className={clsx(styles.helperText, {
            [styles.helperTextDisabled]: isDisabled,
            [styles.helperTextError]: isError && !isDisabled,
          })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
