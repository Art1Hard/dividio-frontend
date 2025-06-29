// basequery.ts
import {
	fetchBaseQuery,
	type BaseQueryFn,
	type FetchArgs,
} from "@reduxjs/toolkit/query";
import type { RootState } from "@src/app/store";
import { authActions } from "@src/entities/auth/model/auth.slice";

const rawBaseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:4200/api",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const state = getState() as RootState;
		const token = state.auth.accessToken;
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	unknown
> = async (args, api, extraOptions) => {
	let result = await rawBaseQuery(args, api, extraOptions);

	if (result.error && (result.error as { status: number }).status === 401) {
		// Пробуем обновить токен
		const refreshResult = await rawBaseQuery(
			{
				url: "/auth/login/access-token",
				method: "POST",
			},
			api,
			extraOptions
		);

		if (refreshResult.data && typeof refreshResult.data === "object") {
			type TokensResponse = { accessToken: string; refreshToken: string };
			const newToken = (refreshResult.data as TokensResponse).accessToken;

			api.dispatch(authActions.setAccessToken(newToken));

			// Повтор оригинального запроса
			result = await rawBaseQuery(args, api, extraOptions);
		} else {
			console.error("Не удалось обновить accessToken через refreshToken");
		}
	}

	return result;
};

export default baseQueryWithReauth;
