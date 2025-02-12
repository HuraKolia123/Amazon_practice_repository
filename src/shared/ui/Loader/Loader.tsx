//react
import { FC } from "react";
// styles
import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({
  className = styles.LoaderContainer,
}) => {
  return (
    <div className={className}>
      <span className={styles.loader}></span>
    </div>
  );
};
