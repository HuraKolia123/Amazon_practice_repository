// react
import { FC, ReactNode } from "react";
//ui
import { Portal } from "@/shared/ui/Portal";
//assets
import Cross from "../../libs/assets/svg/cross.svg?react";
// styles
import styles from "./Drawer.module.scss";

interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
}

export const Drawer: FC<DrawerProps> = ({ onClose, children, isOpen }) => {
  return (
    isOpen && (
      <Portal>
        <div className={styles.backdrop}>
          <div className={styles.Drawer}>
            {children}
            <button onClick={onClose} className={styles.drawerButton}>
              <Cross />
            </button>
          </div>
        </div>
      </Portal>
    )
  );
};
