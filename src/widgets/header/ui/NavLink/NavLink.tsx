// react
import { FC } from "react";
// styles
import styles from "./NavLink.module.scss";

interface NavLinkProps {
  text: string;
}

export const NavLink: FC<NavLinkProps> = ({ text }) => {
  return <div className={styles.NavLink}>{text}</div>;
};
