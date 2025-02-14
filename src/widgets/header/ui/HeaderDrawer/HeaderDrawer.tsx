// react
import { FC } from "react";
//assets
import SignIn from "../../libs/assets/png/SignIn.png";
//query
import { useGetCategoryItemsQuery } from "@/entities/utility/productCategoryList";
//ui
import { ProductCategoryQuery } from "@/pages/search/ui/ProductCategoryQuery";
import { Drawer } from "@/widgets/drawer_/ui/Drawer/Drawer";
import { Loader } from "@/shared/ui/Loader";
// styles
import styles from "./HeaderDrawer.module.scss";
import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";

interface HeaderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderDrawer: FC<HeaderDrawerProps> = ({ isOpen, onClose }) => {
  const { isFetching, isLoading, error } = useGetCategoryItemsQuery(
    {
      country: "US",
    },
    { skip: !isOpen }
  );

  const getDrawerContent = () => {
    if (isLoading || isFetching) {
      return <Loader className={styles.categoryLoader} />;
    }

    if (error) {
      return <ErrorComponent className={styles.errorCategory} />;
    }

    return <ProductCategoryQuery />;
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className={styles.topDrawerSide}>
        <div className={styles.photo}>
          <img src={SignIn} alt="sign in..." />
        </div>
        <div className={styles.text}> Hello, sign in</div>
      </div>
      <div className={styles.bottomDrawerSide}>{getDrawerContent()}</div>
    </Drawer>
  );
};
