import {
	fetchBaseQuery,
	type BaseQueryFn,
	type FetchArgs,
} from "@reduxjs/toolkit/query";
import type { RootState } from "@src/store";
import { authActions } from "./auth.slice";

const authBaseQuery = (endpoint: string = "/") => {
	const baseQuery = fetchBaseQuery({
		baseUrl: `http://localhost:4200${endpoint}`,
		credentials: "include", //! важно для передачи и получения httpOnly cookie
		prepareHeaders: (headers, { getState }) => {
			const state = getState() as RootState;
			const token = state.auth.accessToken;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	});

	return baseQuery;
};

// Обёртка над fetchBaseQuery: перехватывает 401 и делает попытку обновления токена
export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	unknown
> = async (args, api, extraOptions) => {
	const baseQuery = authBaseQuery("/api/auth");

	let result = await baseQuery(args, api, extraOptions);

	// Если accessToken истёк и получаем 401
	if (result.error && (result.error as { status: number }).status === 401) {
		// Пробуем получить новый accessToken
		const refreshResult = await baseQuery(
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
			result = await baseQuery(args, api, extraOptions);
		} else {
			console.error("Не удалось обновить accessToken через refreshToken");
		}
	}

	return result;
};

export default authBaseQuery;
