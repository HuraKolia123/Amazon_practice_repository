// react
import { FC, useState } from "react";
//redax
import { getUserIsLoggedIn } from "@/entities/user";
import { getUserName } from "@/entities/user/model/selectors/userSelectors";
import { useSelector } from "react-redux";
//routing
import { Link } from "react-router-dom";
import { getSignInPageRoute } from "@/shared/libs/constants/routes";
//ui
import { InfoComponent } from "@/widgets/infoComponent";
import { LogOutModal } from "@/shared/ui/LogOutModal";
//assets
import ChevronDown from "@/shared/libs/assets/svg/chevron_down.svg?react";
// styles
import styles from "./HeaderSignInButton.module.scss";

interface HeaderSignInButtonProps {}

export const HeaderSignInButton: FC<HeaderSignInButtonProps> = ({}) => {
  const userName = useSelector(getUserName);

  const isLoggedIn = useSelector(getUserIsLoggedIn);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const buttonText = isLoggedIn ? `Hello, ${userName}` : "Hello, sign in";

  const link = isLoggedIn ? "/profile" : getSignInPageRoute();

  return (
    <div style={{ position: "relative" }}>
      <Link
        to={link}
        className={styles.infoComponent}
        onMouseEnter={() => isLoggedIn && setIsModalVisible(true)}
        onMouseLeave={() => setIsModalVisible(false)}
      >
        <InfoComponent
          maxWidth={138}
          topText={buttonText}
          bottomText="Account & Lists"
          icon={<ChevronDown />}
        />
      </Link>
      {isModalVisible && (
        <div
          onMouseEnter={() => isLoggedIn && setIsModalVisible(true)}
          onMouseLeave={() => setIsModalVisible(false)}
        >
          <LogOutModal />
        </div>
      )}
    </div>
  );
};
