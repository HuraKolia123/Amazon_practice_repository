import { mokkyDevAPI } from "@/shared/api";
import {
  PostRegistrationRequest,
  PostRegistrationResponse,
} from "../model/types/registrationAPI";
import { LOCAL_STORAGE_ACCESS_KEY } from "@/shared/libs/constants/localStorageAccessKey";
import { userActions } from "@/entities/user";

const registrationAPI = mokkyDevAPI.injectEndpoints({
  endpoints: (builder) => ({
    postRegistration: builder.mutation<
      PostRegistrationResponse,
      PostRegistrationRequest
    >({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { meta, data } = await queryFulfilled;

        if (meta && meta.response && meta.response.ok) {
          localStorage.setItem(LOCAL_STORAGE_ACCESS_KEY, data.token);

          dispatch(userActions.setLoggedInTrue());
          dispatch(userActions.setUser(data.data));
        }
      },
    }),
  }),
});

export const { usePostRegistrationMutation } = registrationAPI;
