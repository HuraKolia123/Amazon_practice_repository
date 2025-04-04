// react
import { getUserIsLoggedIn } from "@/entities/user";
import { getProductsRoute } from "@/shared/libs/constants/routes";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface GuestGuardProps {}

export const GuestGuard: FC<GuestGuardProps> = ({}) => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return isLoggedIn ? <Navigate to={getProductsRoute()} replace /> : <Outlet />;
};
