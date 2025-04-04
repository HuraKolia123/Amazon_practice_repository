import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MOKKYDEV_BASE_URL } from "../libs/constants/mokkyDevBaseUrl";
import { getUserIsLoggedIn } from "@/entities/user";
import { StateSchema } from "@/app/config/store/StateSchema";
import { LOCAL_STORAGE_ACCESS_KEY } from "../libs/constants/localStorageAccessKey";

export const mokkyDevAPI = createApi({
  reducerPath: "mokkyDevAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: MOKKYDEV_BASE_URL,
    prepareHeaders: (headers, api) => {
      const isLoggedIn = getUserIsLoggedIn(api.getState() as StateSchema);

      if (isLoggedIn) {
        headers.set("Authorization", `Bearer ${LOCAL_STORAGE_ACCESS_KEY}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
