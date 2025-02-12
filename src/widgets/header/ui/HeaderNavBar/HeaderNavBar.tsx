// react
import { FC } from "react";
// styles
import styles from "./HeaderNavBar.module.scss";
import { HeaderDrawerButton } from "../HeaderDrawerButton/HeaderDrawerButton";
import { NavLink } from "../NavLink/NavLink";
import { HeaderNavBarConfig } from "../../libs/constants/HeaderNavbarConfig";

interface HeaderNavBarProps {}

export const HeaderNavBar: FC<HeaderNavBarProps> = ({}) => {
  return (
    <div className={styles.HeaderNavBar}>
      <HeaderDrawerButton />
      {HeaderNavBarConfig.map((item) => {
        return <NavLink text={item.text} key={item.text} />;
      })}
    </div>
  );
};
