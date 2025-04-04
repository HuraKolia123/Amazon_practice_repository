// react
import { FC } from "react";
//redax
import { useDispatch } from "react-redux";
import { userActions } from "@/entities/user";
//ui
import { Button } from "../Button";
// styles
import styles from "./LogOutModal.module.scss";
import { useNavigate } from "react-router-dom";
import { getHomeRoute } from "@/shared/libs/constants/routes";

interface LogOutModalProps {}

export const LogOutModal: FC<LogOutModalProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userActions.logout());
    navigate(getHomeRoute());
  };
  return (
    <div className={styles.LogOutModal} onClick={(e) => e.stopPropagation()}>
      <Button onClick={handleLogOut}>Log out</Button>
    </div>
  );
};
