// react
import { FC } from "react";
//ui
import { HeaderNavLink } from "../HeaderNavLink";
import { HeaderDrawerButton } from "../HeaderDrawerButton/HeaderDrawerButton";
//constants
import { headerNavBarConfig } from "../../libs/constants/headerNavbarConfig";
// styles
import styles from "./HeaderNavBar.module.scss";

interface HeaderNavBarProps {}

export const HeaderNavBar: FC<HeaderNavBarProps> = ({}) => {
  return (
    <div className={styles.HeaderNavBar}>
      <HeaderDrawerButton />
      {headerNavBarConfig.map((item) => {
        return <HeaderNavLink text={item.text} key={item.text} />;
      })}
    </div>
  );
};
