export type { IUser } from "./model/types/userTypes";
export { userActions, userReducer } from "./model/slice/userSlice";

export {
  getUserData,
  getUserIsLoggedIn,
  getUserState,
} from "./model/selectors/userSelectors";
