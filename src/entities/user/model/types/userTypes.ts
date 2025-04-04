export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

export interface UserStateSchema {
  isLoggedIn: boolean;
  user: IUser;
}
