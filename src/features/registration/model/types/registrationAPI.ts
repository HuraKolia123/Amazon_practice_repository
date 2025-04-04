import { IUser } from "@/entities/user";

export interface PostRegistrationResponse {
  token: string;
  data: IUser;
}

export type PostRegistrationRequest = Omit<IUser, "id">;
