// react
import { FC, ReactNode, useRef } from "react";
//ui
import { Portal } from "@/shared/ui/Portal";
//assets
import Cross from "../../libs/assets/svg/cross.svg?react";
// styles
import styles from "./Drawer.module.scss";
import { useClickOutside } from "@/shared/libs/hooks/useClickOutside";

interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
}

export const Drawer: FC<DrawerProps> = ({ onClose, children, isOpen }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClose);

  return (
    isOpen && (
      <Portal>
        <div className={styles.backdrop}>
          <div className={styles.Drawer} ref={ref}>
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
