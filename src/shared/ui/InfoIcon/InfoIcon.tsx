// react
import { FC, useState } from "react";
//assets
import LabelIconInfo from "@/shared/libs/assets/svg/infoIcon.svg?react";
// styles
import styles from "./InfoIcon.module.scss";

interface InfoIconProps {
  text: string;
}

export const InfoIcon: FC<InfoIconProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onIconHoveredToggle = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={styles.InfoIcon}>
      {isHovered && (
        <div className={styles.textContainer}>
          <div className={styles.text}>
            {text}
            <div className={styles.square}></div>
          </div>
        </div>
      )}
      <LabelIconInfo
        onMouseEnter={onIconHoveredToggle}
        onMouseLeave={onIconHoveredToggle}
      />
    </div>
  );
};
