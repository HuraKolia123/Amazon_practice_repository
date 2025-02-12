import { ReactNode } from "react";

export interface IOption {
  content: ReactNode;
  [keys: string]: any;
}
