// react
import { FC } from "react";
// styles
import styles from "./HeaderDrawer.module.scss";
import { Drawer } from "@/widgets/drawer_/ui/Drawer/Drawer";
//assets
import SignIn from "../../libs/assets/png/SignIn.png";
// styles
import { useGetCategoryItemsQuery } from "@/entities/utility/productCategoryList";
import { Loader } from "@/shared/ui/Loader";
import { ProductCategoriesList } from "@/pages/search/ui/ProductCategoriesList";

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
      // TODO change classnameCOntainer
      return <Loader className="fakofa" />;
    }

    if (error) {
      // TODO change classnameCOntainer
      return <div className={styles.error}>Something went wrong....</div>;
    }

    return <ProductCategoriesList />;
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
