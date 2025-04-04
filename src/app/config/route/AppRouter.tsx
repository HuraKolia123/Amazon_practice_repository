//react
import { FC } from "react";
// react-router-dom
import { Route, Routes } from "react-router-dom";
//ui
import { HomePage } from "@/pages/home/ui/HomePage/HomePage";
import { ProductSearchPage } from "@/pages/search";
// constants
import {
  getBasketRoute,
  getHomeRoute,
  getProductsRoute,
  getSignInPageRoute,
  getSignUpPageRoute,
  getSingleProductRoute,
} from "@/shared/libs/constants/routes";
import { HeaderLayout } from "@/app/layout/HeaderLayout/HeaderLayout";
import { ProductDetailsPage } from "@/pages/product-details/ui/ProductDetailsPage/ProductDetailsPage";
import { SignInPage } from "@/pages/signIn";
import { SignUpPage } from "@/pages/signUp";
import { AuthRequired } from "./routeGuards/AuthRequired";
import { GuestGuard } from "./routeGuards/GuestGuard";
import { BasketForUnregistered } from "@/pages/basket/ui/BasketForUnregistered";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = ({}) => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path={getHomeRoute()} element={<HomePage />} />
        <Route path={getProductsRoute()} element={<ProductSearchPage />} />
        <Route element={<AuthRequired />}>
          <Route
            path={getSingleProductRoute(":asin")}
            element={<ProductDetailsPage />}
          />
        </Route>
        <Route path={getBasketRoute()} element={<BasketForUnregistered />} />
        <Route element={<GuestGuard />}>
          <Route element={<SignInPage />} path={getSignInPageRoute()}></Route>
          <Route element={<SignUpPage />} path={getSignUpPageRoute()}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
