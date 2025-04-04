// react
import { getUserIsLoggedIn } from "@/entities/user";
import { getSignInPageRoute } from "@/shared/libs/constants/routes";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface AuthRequiredProps {}

export const AuthRequired: FC<AuthRequiredProps> = ({}) => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={getSignInPageRoute()} replace />
  );
};
