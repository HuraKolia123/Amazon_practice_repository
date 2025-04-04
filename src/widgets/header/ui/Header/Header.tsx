// react
import { FC } from "react";
//assets
import USAflagImage from "../../libs/assets/jpg/USA.jpg";
//ui
import { HeaderCountryDeliver } from "../HeaderCountryDeliver";
import { CountryToggle } from "@/shared/ui/CountryToggle";
import { AmazonCart } from "@/shared/ui/AmazonCart";
import { HeaderNavBar } from "../HeaderNavBar";
import { CleverSearch } from "@/widgets/cleverSearch";
import { InfoComponent } from "@/widgets/infoComponent";
import { HeaderSignInButton } from "../HeaderSignInButton/HeaderSignInButton";
import { AmazonLogo } from "@/shared/ui/AmazonLogo";
// styles
import styles from "./Header.module.scss";
interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.topSide}>
          <div className={styles.leftPart}>
            <div className={styles.labelAndDeliver}>
              <AmazonLogo />
              <HeaderCountryDeliver country="Ukraine" />
            </div>
            <CleverSearch />
          </div>
          <div className={styles.rightPart}>
            <CountryToggle countryInitials="EN" flag={USAflagImage} />
            <HeaderSignInButton />
            <InfoComponent
              topText="Returns"
              bottomText="& Orders"
              maxWidth={78}
            />
            <AmazonCart />
          </div>
        </div>
        <HeaderNavBar />
      </div>
    </>
  );
};
