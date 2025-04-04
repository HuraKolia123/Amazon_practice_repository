// react
import { CSSProperties, FC, ReactNode } from "react";
// styles
import styles from "./InfoComponent.module.scss";

interface InfoComponentProps {
  topText: string;
  bottomText: string;
  icon?: ReactNode;
  maxWidth: CSSProperties["maxWidth"];
}

export const InfoComponent: FC<InfoComponentProps> = ({
  icon,
  bottomText,
  topText,
  maxWidth,
}) => {
  return (
    <div className={styles.InfoComponent} style={{ maxWidth: maxWidth }}>
      <div className={styles.topText}>{topText}</div>
      <div className={styles.bottomTextAndIcon}>
        <div className={styles.bottomText}>{bottomText}</div>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
    </div>
  );
};
