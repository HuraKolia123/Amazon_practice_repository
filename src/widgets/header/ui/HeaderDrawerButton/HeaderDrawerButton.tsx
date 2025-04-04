// react
import { FC, useState } from "react";
//ui
import { HeaderDrawer } from "../HeaderDrawer";
//assets
import BurgerIcon from "@/shared/libs/assets/svg/openModalWindow.svg?react";
// styles
import styles from "./HeaderDrawerButton.module.scss";

interface HeaderDrawerButtonProps {}

export const HeaderDrawerButton: FC<HeaderDrawerButtonProps> = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <>
      <div className={styles.openingButton} onClick={toggleDrawer}>
        <BurgerIcon />
        <div className={styles.text}>All</div>
      </div>
      <HeaderDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};
