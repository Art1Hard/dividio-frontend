import { createApi } from "@reduxjs/toolkit/query/react";
import { authActions } from "../../../entities/auth/model/auth.slice";
import type { AuthSchema } from "@src/features/auth/model/auth.schema";
import baseQueryWithReauth from "@src/entities/auth/services/basequery";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		login: build.mutation<{ accessToken: string }, AuthSchema>({
			query: (credentials) => ({
				url: "auth/login",
				method: "POST",
				body: credentials,
			}),
			async onQueryStarted(_, { queryFulfilled, dispatch }) {
				const { data } = await queryFulfilled;
				dispatch(authActions.setAccessToken(data.accessToken));
			},
		}),

		register: build.mutation<
			{ accessToken: string },
			{ user: AuthSchema; captchaToken: string }
		>({
			query: (credentials) => ({
				url: "auth/register",
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
				url: "auth/login/access-token",
				method: "POST",
			}),
			async onQueryStarted(_, { queryFulfilled, dispatch }) {
				const { data } = await queryFulfilled;
				dispatch(authActions.setAccessToken(data.accessToken));
			},
		}),

		logout: build.mutation<void, void>({
			query: () => ({
				url: "auth/logout",
				method: "POST",
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation, useGetAccessTokenQuery } =
	authApi;
