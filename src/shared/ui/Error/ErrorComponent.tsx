// react
import { FC } from "react";
// styles
import styles from "./ErrorComponent.module.scss";

interface ErrorComponentProps {
  className?: string;
}

export const ErrorComponent: FC<ErrorComponentProps> = ({
  className = styles.errorProduct,
}) => {
  return <div className={className}>Something went wrong....</div>;
};
