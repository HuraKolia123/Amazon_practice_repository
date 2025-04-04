import { StateSchema } from "@/app/config/store/StateSchema";

export const getUserState = (state: StateSchema) => state.user;

export const getUserData = (state: StateSchema) => state.user.user;

export const getUserName = (state: StateSchema) => state.user.user.fullName;

export const getUserIsLoggedIn = (state: StateSchema) => state.user.isLoggedIn;
