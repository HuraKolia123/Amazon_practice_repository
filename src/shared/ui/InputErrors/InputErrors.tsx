// react
import { FC } from "react";
// styles
import styles from "./InputErrors.module.scss";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  MultipleFieldErrors,
} from "react-hook-form";

interface InputErrorsProps {
  errors:
    | MultipleFieldErrors
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

export const InputErrors: FC<InputErrorsProps> = ({ errors }) => {
  return (
    errors && (
      <div className={styles.InputErrors}>
        {Object.values(errors || {}).map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    )
  );
};
