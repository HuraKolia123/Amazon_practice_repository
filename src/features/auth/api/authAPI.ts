import { mokkyDevAPI } from "@/shared/api";
import { PostAuthRequest, PostAuthResponse } from "../model/types/authAPI";
import { LOCAL_STORAGE_ACCESS_KEY } from "@/shared/libs/constants/localStorageAccessKey";
import { userActions } from "@/entities/user";

const authAPI = mokkyDevAPI.injectEndpoints({
  endpoints: (builder) => ({
    postAuth: builder.mutation<PostAuthResponse, PostAuthRequest>({
      query: (data) => ({
        url: "/auth",
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

export const { usePostAuthMutation } = authAPI;
