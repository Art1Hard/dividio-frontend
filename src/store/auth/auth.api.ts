import {
	createApi,
	fetchBaseQuery,
	type FetchArgs,
	type BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "@src/store";
import { authActions } from "./auth.slice";

const rawBaseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:4200/api/auth",
	credentials: "include", // важно для передачи и получения httpOnly cookie
	prepareHeaders: (headers, { getState }) => {
		const state = getState() as RootState;
		const token = state.auth.accessToken;
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

// Обёртка над fetchBaseQuery: перехватывает 401 и делает попытку обновления токена
const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	unknown
> = async (args, api, extraOptions) => {
	let result = await rawBaseQuery(args, api, extraOptions);

	// Если accessToken истёк и получаем 401
	if (result.error && (result.error as { status: number }).status === 401) {
		// Пробуем получить новый accessToken
		const refreshResult = await rawBaseQuery(
			{
				url: "/login/access-token",
				method: "POST",
			},
			api,
			extraOptions
		);

		if (refreshResult.data && typeof refreshResult.data === "object") {
			// Сохраняем новый accessToken
			type TokensResponse = { accessToken: string; refreshToken: string };
			const newToken = (refreshResult.data as TokensResponse).accessToken;

			api.dispatch(authActions.setAccessToken(newToken));

			// Повторяем оригинальный запрос с новым accessToken
			result = await rawBaseQuery(args, api, extraOptions);
		} else {
			console.error("Не удалось обновить accessToken через refreshToken");
		}
	}

	return result;
};

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		login: build.mutation<
			{ accessToken: string },
			{ email: string; password: string }
		>({
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

export const { useLoginMutation, useGetAccessTokenQuery } = authApi;
