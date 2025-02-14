// react
import { FC } from "react";
//ui
import { NavLink } from "../NavLink/NavLink";
import { HeaderDrawerButton } from "../HeaderDrawerButton/HeaderDrawerButton";
//constants
// styles
import styles from "./HeaderNavBar.module.scss";
import { headerNavBarConfig } from "../../libs/constants/headerNavbarConfig";

interface HeaderNavBarProps {}

export const HeaderNavBar: FC<HeaderNavBarProps> = ({}) => {
  return (
    <div className={styles.HeaderNavBar}>
      <HeaderDrawerButton />
      {headerNavBarConfig.map((item) => {
        return <NavLink text={item.text} key={item.text} />;
      })}
    </div>
  );
};
