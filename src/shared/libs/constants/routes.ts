import { routeConfig } from "@/app/config/route/routeConfig";

export const getHomeRoute = () => routeConfig.home;

export const getCategoriesRoute = () => routeConfig.categories;

export const getProductsRoute = () => routeConfig.products;

export const getSingleProductRoute = (asin: number | string) =>
  `${routeConfig.singleProduct.replace(
    ":asin",
    typeof asin === "number" ? asin.toString() : asin
  )}`;
