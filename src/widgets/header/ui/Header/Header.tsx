// react
import { FC } from "react";
// styles
import styles from "./Header.module.scss";
import { AmazonLabel } from "../AmazonLabel/AmazonLabel";
import { CountryDeliver } from "../CountryDeliver/CountryDeliver";
//assets
import USA from "../../libs/assets/jpg/USA.jpg";
import { CountryToggle } from "../CountryToggle/CountryToggle";
import ChevronDown from "../../libs/assets/svg/chevron_down.svg?react";
import { InfoComponent } from "../InfoComponent/InfoComponent";
import { AmazonCart } from "../AmazonCart/AmazonCart";
import { HeaderNavBar } from "../HeaderNavBar/HeaderNavBar";
import { CleverSearch } from "@/widgets/cleverSearch";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.topSide}>
          <div className={styles.leftPart}>
            <AmazonLabel />
            <CountryDeliver country="Ukraine" />
            <CleverSearch />
          </div>
          <div className={styles.rightPart}>
            <CountryToggle countryInitials="EN" flag={USA} />
            <InfoComponent
              maxWidth={138}
              topText="Hello, sign in"
              bottomText="Account & Lists"
              icon={<ChevronDown />}
            />
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
