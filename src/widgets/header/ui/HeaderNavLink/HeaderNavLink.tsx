// react
import { FC } from "react";
// styles
import styles from "./HeaderNavLink.module.scss";

interface HeaderNavLinkProps {
  text: string;
}

export const HeaderNavLink: FC<HeaderNavLinkProps> = ({ text }) => {
  return <div className={styles.HeaderNavLink}>{text}</div>;
};
