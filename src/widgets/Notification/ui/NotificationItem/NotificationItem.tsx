// react
import { FC, useEffect } from "react";
//shared
import { Button } from "@/shared/ui/Button";
//assets
import CloseIcon from "@/widgets/Notification/libs/assets/svg/CloseIcon.svg?react";
import UpdateIcon from "@/widgets/Notification/libs/assets/svg/UpdateIcon.svg?react";
import DangerIcon from "@/widgets/Notification/libs/assets/svg/DangerIcon.svg?react";
import WarningIcon from "@/widgets/Notification/libs/assets/svg/WarningIcon.svg?react";
import InfoIcon from "@/widgets/Notification/libs/assets/svg/InfoIcon.svg?react";
import SuccessIcon from "@/widgets/Notification/libs/assets/svg/SuccessIcon.svg?react";
import UploadIcon from "@/widgets/Notification/libs/assets/svg/UploadIcon.svg?react";
// styles
import styles from "./NotificationItem.module.scss";
import clsx from "clsx";
import { Portal } from "@/shared/ui/Portal";

interface NotificationItemProps {
  notificationTypeVariant:
    | "default"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "uploading"
    | "message"
    | "updates";
  notificationSizeVariant?: "smaller" | "bigger";
  title: string;
  text: string;
  leftButtonText?: string;
  rightButtonText?: string;
  isOpenedModalWindow: boolean;
  setIsOpenedModalWindow: (value: boolean) => void;
}

export const NotificationItem: FC<NotificationItemProps> = ({
  title,
  text,
  leftButtonText = "Dismiss",
  rightButtonText = "Changelog",
  notificationSizeVariant = "smaller",
  notificationTypeVariant = "default",
  isOpenedModalWindow = false,
  setIsOpenedModalWindow,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => setIsOpenedModalWindow(false), 1000);

    return () => clearTimeout(timer);
  });

  if (!isOpenedModalWindow) {
    return null;
  }

  const notificationToggle = () => {
    setIsOpenedModalWindow(!isOpenedModalWindow);
  };

  const getNotificationType = () => {
    switch (notificationTypeVariant) {
      case "default": {
        return;
      }
      case "danger": {
        return (
          <div className={styles.icon}>
            <DangerIcon />
          </div>
        );
      }
      case "info": {
        return (
          <div className={styles.icon}>
            <InfoIcon />
          </div>
        );
      }
      case "success": {
        return (
          <div className={styles.icon}>
            <SuccessIcon />
          </div>
        );
      }
      case "updates": {
        return (
          <div className={styles.uploadAndUpdateIconWrapper}>
            <UpdateIcon />
          </div>
        );
      }
      case "uploading": {
        return (
          <div className={styles.uploadAndUpdateIconWrapper}>
            <UploadIcon />
          </div>
        );
      }
      case "warning": {
        return (
          <div className={styles.icon}>
            <WarningIcon />
          </div>
        );
      }
    }
  };

  return (
    <Portal>
      <div
        className={clsx(styles.Notification, {
          [styles.notificationSmaller]: notificationSizeVariant === "smaller",
          [styles.notificationBigger]: notificationSizeVariant === "bigger",
        })}
      >
        <div className={styles.wrapperNotificationIcon}>
          <div className={styles.notificationIcon}>{getNotificationType()}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.mainText}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
          </div>
          <div className={styles.btns}>
            <Button
              onClick={() => {}}
              buttonStyleVariant="Primary"
              buttonVariant="Text"
              buttonSizeVariant="extrasmall"
            >
              {leftButtonText}
            </Button>
            <Button
              onClick={() => {}}
              buttonStyleVariant="Accent"
              buttonVariant="Text"
              buttonSizeVariant="extrasmall"
            >
              {rightButtonText}
            </Button>
          </div>
        </div>
        <div className={styles.cancelIcon} onClick={notificationToggle}>
          <CloseIcon />
        </div>
      </div>
    </Portal>
  );
};
