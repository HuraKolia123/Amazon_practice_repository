// react
import { FC } from "react";
// react-router-dom
import { Outlet } from "react-router-dom";
//ui
import { Header } from "@/widgets/header/ui/Header/Header";

interface HeaderLayoutProps {}

export const HeaderLayout: FC<HeaderLayoutProps> = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
