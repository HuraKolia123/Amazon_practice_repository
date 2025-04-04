// react
import { FC } from "react";
//assets
import SignIn from "../../libs/assets/png/SignIn.png";
//redux
import { useSelector } from "react-redux";
import {
  getUserIsLoggedIn,
  getUserName,
} from "@/entities/user/model/selectors/userSelectors";
//routing
import { Link } from "react-router-dom";

// styles
import styles from "./HeaderDrawerTopSide.module.scss";
import { getSignInPageRoute } from "@/shared/libs/constants/routes";

interface HeaderDrawerTopSideProps {
  onClose: () => void;
}

export const HeaderDrawerTopSide: FC<HeaderDrawerTopSideProps> = ({
  onClose,
}) => {
  const signedUserName = useSelector(getUserName);

  const isLoggedIn = useSelector(getUserIsLoggedIn);

  const userName = isLoggedIn ? `${signedUserName}` : " Hello, sign in";

  const drawersRouting = isLoggedIn ? "/profile" : getSignInPageRoute();

  return (
    <Link
      to={drawersRouting}
      className={styles.topDrawerSide}
      onClick={onClose}
    >
      <div className={styles.photo}>
        <img src={SignIn} alt="sign in..." />
      </div>
      <div className={styles.text}>{userName}</div>
    </Link>
  );
};
