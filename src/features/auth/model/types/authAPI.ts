import { IUser } from "@/entities/user";

export interface PostAuthResponse {
  token: string;
  data: IUser;
}

export type PostAuthRequest = Omit<IUser, "fullName" | "id">;
