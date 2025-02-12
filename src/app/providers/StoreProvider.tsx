// react
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store/createReduxStore";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
