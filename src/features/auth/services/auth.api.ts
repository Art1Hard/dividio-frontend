import { createApi } from "@reduxjs/toolkit/query/react";
import { authActions } from "../model/auth.slice";
import type { AuthSchema } from "@src/features/auth/model/auth.schema";
import { baseQueryWithReauth } from "@features/auth/services/auth.basequery";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		login: build.mutation<{ accessToken: string }, AuthSchema>({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: credentials,
			}),
			async onQueryStarted(_, { queryFulfilled, dispatch }) {
				const { data } = await queryFulfilled;
				dispatch(authActions.setAccessToken(data.accessToken));
			},
		}),

		register: build.mutation<{ accessToken: string }, AuthSchema>({
			query: (credentials) => ({
				url: "/register",
				method: "POST",
				body: credentials,
			}),
			async onQueryStarted(_, { queryFulfilled, dispatch }) {
				const { data } = await queryFulfilled;
				dispatch(authActions.setAccessToken(data.accessToken));
			},
		}),

		getAccessToken: build.query<{ accessToken: string }, void>({
			query: () => ({
				url: "/login/access-token",
				method: "POST",
			}),
			async onQueryStarted(_, { queryFulfilled, dispatch }) {
				const { data } = await queryFulfilled;
				dispatch(authActions.setAccessToken(data.accessToken));
			},
		}),

		logout: build.mutation<void, void>({
			query: () => ({
				url: "/logout",
				method: "POST",
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation, useGetAccessTokenQuery } =
	authApi;
