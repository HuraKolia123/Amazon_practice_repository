import { routeConfig } from "@/app/config/route/routeConfig";

export const getHomeRoute = () => routeConfig.home;

export const getProductsRoute = (query?: string) =>
  !query ? routeConfig.products : `${routeConfig.products}?query=${query}`;

export const getSingleProductRoute = (asin: number | string) =>
  `${routeConfig.productDetails.replace(
    ":asin",
    typeof asin === "number" ? asin.toString() : asin
  )}`;

export const getSignInPageRoute = () => routeConfig.signIn;
export const getSignUpPageRoute = () => routeConfig.signUp;

export const getBasketRoute = () => routeConfig.basket;
