import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ACCESS_TOKEN_KEY } from "@shared/api/auth/constants.ts";
import { loadFromLS } from "@shared/lib";

import type { SignInRequest, SignResponse, SignUpRequest, UserInfo } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.v2.react-learning.ru",
    prepareHeaders: (headers: Headers) => {
      const token = loadFromLS({ key: ACCESS_TOKEN_KEY });

      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    }
  }),
  endpoints: (build) => ({
    login: build.mutation<SignResponse, SignInRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body
      })
    }),
    register: build.mutation<SignResponse, SignUpRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body
      })
    }),
    // logout: build.mutation<{ message: string }, void>({
    //   query: () => ({
    //     url: "/auth/logout",
    //     method: "POST"
    //   })
    // }),
    //
    getUsersMe: build.query<UserInfo, void>({
      query: () => ({
        url: "/users/me",
        method: "GET"
      })
    })
  })
});

export const {
  useLoginMutation,
  useRegisterMutation,
  // useLogoutMutation,
  useGetUsersMeQuery
} = authApi;
