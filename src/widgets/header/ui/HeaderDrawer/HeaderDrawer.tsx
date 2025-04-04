// react
import { FC } from "react";
//assets
//query
// import { useGetCategoryItemsQuery } from "@/entities/utility/productCategoryList";
//ui
// import { ProductCategoryQuery } from "@/pages/search/ui/ProductCategoryQuery";
import { Drawer } from "@/widgets/drawer/ui/Drawer/Drawer";
// import { Loader } from "@/shared/ui/Loader";
// styles
import styles from "./HeaderDrawer.module.scss";
// import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";
import { mokCategoriesData } from "@/pages/search/libs/constants/mokCategoriesData";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/pages/search/model/selectors";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";
import { productPageActions } from "@/pages/search/model/slice";
import { ProductCategoryItem } from "@/entities/utility/productCategoryList/ui/productCategoryItem";
import { HeaderDrawerTopSide } from "../HeaderDrawerTopSide/HeaderDrawerTopSide";

interface HeaderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderDrawer: FC<HeaderDrawerProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const selectedCategoryId = useSelector(getCategory);

  const onCategoryClick = (id: IProductCategoryItem["id"]) => {
    dispatch(productPageActions.setCategory(id));
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <HeaderDrawerTopSide onClose={onClose} />
      <div className={styles.bottomDrawerSide}>
        {mokCategoriesData.map((item) => {
          return (
            <ProductCategoryItem
              id={item.id}
              key={item.id}
              name={item.name}
              onCategoryClick={onCategoryClick}
              isSelected={selectedCategoryId === item.id}
            />
          );
        })}
      </div>
    </Drawer>
  );
};
