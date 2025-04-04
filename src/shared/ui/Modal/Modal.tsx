// react
import { CSSProperties, FC, ReactNode } from "react";
//ui
import { Button } from "../Button";
import { Portal } from "../Portal";
//assets
import Cross from "@/shared/libs/assets/svg/cross.svg?react";
// styles
import styles from "./Modal.module.scss";

interface ModalProps {
  modalHeader?: string;
  isModalButton?: boolean;
  childrenButton?: string;
  modalAdditionalInfo?: string;
  isCloseIcon?: boolean;
  isOpen: boolean;
  onClose: () => void;
  maxWidth: CSSProperties["maxWidth"];
  maxHeight: CSSProperties["maxHeight"];
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  childrenButton,
  modalHeader,
  modalAdditionalInfo,
  isCloseIcon = true,
  isOpen,
  onClose,
  maxWidth,
  maxHeight,
  isModalButton,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className={styles.modalOverlay} onClick={onClose}>
            <div
              className={styles.Modal}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
            >
              {modalHeader && (
                <div className={styles.modalHeader}>{modalHeader}</div>
              )}
              {modalAdditionalInfo && (
                <div className={styles.modalAdditionalInfo}>
                  {modalAdditionalInfo}
                </div>
              )}
              {isCloseIcon && (
                <div className={styles.icon} onClick={onClose}>
                  <Cross />
                </div>
              )}
              {isModalButton && (
                <div className={styles.modalBtn}>
                  <Button onClick={onClose}>{childrenButton}</Button>
                </div>
              )}
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
