// react
import { FC } from "react";
//routing
import { Link } from "react-router-dom";
import {
  getProductsRoute,
  getSignInPageRoute,
  getSignUpPageRoute,
} from "@/shared/libs/constants/routes";

//ui
import { HorizontalLine } from "@/shared/ui/HorizontalLine";
import { Button } from "@/shared/ui/Button";
//assets
import kitchenFirstImage from "@/pages/home/libs/assets/jpg/kitchen/kitchednImage1.jpg";
import kitchenSecondImage from "@/pages/home/libs/assets/jpg/kitchen/kitchednImage2.jpg";
import kitchenThirdImage from "@/pages/home/libs/assets/jpg/kitchen/kitchednImage3.jpg";
import kitchenFourthImage from "@/pages/home/libs/assets/jpg/kitchen/kitchednImage4.jpg";
import compFirstImage from "../../libs/assets/jpg/computer/comp1.jpg";
import compSecondImage from "../../libs/assets/jpg/computer/comp2.jpg";
import compThirdImage from "../../libs/assets/jpg/computer/comp3.jpg";
import compFourthImage from "../../libs/assets/jpg/computer/comp4.jpg";
import shopGamingImage from "../../libs/assets/jpg/shopGaming/shopGaming1.jpg";
import officeGoods from "../../libs/assets/jpg/officeGoods/officeGoods.jpg";
// styles
import styles from "./HomePage.module.scss";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.content}>
        <div className={styles.topCategoriesInKitchen}>
          <div className={styles.header}>
            Top categories in Kitchen appliances
          </div>

          <Link to={getProductsRoute("Cooker")} className={styles.routerLink}>
            <img
              src={kitchenFirstImage}
              alt="image"
              className={styles.topKitchenImage}
            />
            <div className={styles.imageHeader}>Cooker</div>
          </Link>
          <div className={styles.bottomImages}>
            <Link to={getProductsRoute("Coffee")} className={styles.routerLink}>
              <img
                src={kitchenSecondImage}
                alt="image"
                className={styles.image}
              />
              <div className={styles.imageHeader}>Coffee</div>
            </Link>
            <Link
              to={getProductsRoute("Pots and Pans")}
              className={styles.routerLink}
            >
              <img
                src={kitchenThirdImage}
                alt="image"
                className={styles.image}
              />
              <div className={styles.imageHeader}>Pots and Pans</div>
            </Link>
            <Link
              to={getProductsRoute("Kettles")}
              className={styles.routerLink}
            >
              <img
                src={kitchenFourthImage}
                alt="image"
                className={styles.image}
              />
              <div className={styles.imageHeader}>Kettles</div>
            </Link>
          </div>
          <div className={styles.productLink}>
            Explore all products in Kitchen
          </div>
        </div>
        <div className={styles.gamingAccessories}>
          <div className={styles.header}>Gaming accessories</div>
          <div className={styles.photosBlock}>
            <div className={styles.computerImagesTopSide}>
              <Link
                to={getProductsRoute("Headsets")}
                className={styles.routerLink}
              >
                <img
                  src={compFirstImage}
                  alt=""
                  className={styles.computerImage}
                />
                <div className={styles.bottomText}>Headsets</div>
              </Link>
              <Link
                to={getProductsRoute("Keyboards")}
                className={styles.routerLink}
              >
                <img
                  src={compSecondImage}
                  alt=""
                  className={styles.computerImage}
                />
                <div className={styles.bottomText}>Keyboards</div>
              </Link>
            </div>
            <div className={styles.computerImagesBottomSide}>
              <Link
                to={getProductsRoute("Computer mice")}
                className={styles.routerLink}
              >
                <img
                  src={compThirdImage}
                  alt=""
                  className={styles.computerImage}
                />
                <div className={styles.bottomText}>Computer mice</div>
              </Link>
              <Link
                to={getProductsRoute("Chairs")}
                className={styles.routerLink}
              >
                <img
                  src={compFourthImage}
                  alt=""
                  className={styles.computerImage}
                />
                <div className={styles.bottomText}>Chairs</div>
              </Link>
            </div>
            <div className={styles.productLink}>See more</div>
          </div>
        </div>
        <Link
          className={styles.shopGaming}
          to={getProductsRoute("Shop gaming")}
        >
          <div className={styles.shopGamingHeader}>Get your game on</div>
          <img src={shopGamingImage} alt="" />
          <div className={styles.productLink}>Shop gaming</div>
        </Link>
        <div className={styles.officeGoods}>
          <div className={styles.header}>New year, new supplies</div>
          <Link
            to={getProductsRoute("Shop office products")}
            className={styles.routerLink}
          >
            <img
              src={officeGoods}
              alt=""
              className={styles.gamingAndOfficeImage}
            />
            <div className={styles.productLinkOffice}>Shop office products</div>
          </Link>
        </div>
      </div>
      <div className={styles.signInSide}>
        <HorizontalLine />
        <div className={styles.recommendations}>
          See personalized recommendations
        </div>
        <div className={styles.btnSide}>
          <Link to={getSignInPageRoute()}>
            <Button>Sign in</Button>
          </Link>
          <Link className={styles.question} to={getSignUpPageRoute()}>
            New customer? <span>Start here.</span>
          </Link>
        </div>
        <HorizontalLine />
      </div>
    </div>
  );
};
