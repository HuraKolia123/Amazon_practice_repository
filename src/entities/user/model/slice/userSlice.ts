import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStateSchema } from "../types/userTypes";
import { LOCAL_STORAGE_ACCESS_KEY } from "@/shared/libs/constants/localStorageAccessKey";

const initialState: UserStateSchema = {
  isLoggedIn: false,
  user: {
    id: 0,
    email: "",
    fullName: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setLoggedInTrue: (state) => {
      state.isLoggedIn = true;
    },
    setUser: (state, action: PayloadAction<UserStateSchema["user"]>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = initialState.isLoggedIn;
      state.user = initialState.user;
      localStorage.removeItem(LOCAL_STORAGE_ACCESS_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
