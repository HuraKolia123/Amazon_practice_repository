//react
import { FC } from "react";
// react-router-dom
import { Route, Routes } from "react-router-dom";
//ui
import { HomePage } from "@/pages/home/ui/HomePage/HomePage";
import { ProductSearchPage } from "@/pages/search";
// constants
import {
  getHomeRoute,
  getProductsRoute,
  getSingleProductRoute,
} from "@/shared/libs/constants/routes";
import { HeaderLayout } from "@/app/layout/HeaderLayout/HeaderLayout";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = ({}) => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path={getHomeRoute()} element={<HomePage />} />
        <Route path={getProductsRoute()} element={<ProductSearchPage />} />
        <Route path={getSingleProductRoute(":asin")} element={<HomePage />} />
      </Route>
    </Routes>
  );
};
