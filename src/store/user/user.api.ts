import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@src/store";
import type { IUser } from "@src/types";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:4200/api",
	credentials: "include", // важно для передачи и получения httpOnly cookie
	prepareHeaders: (headers, { getState }) => {
		const state = getState() as RootState;
		const token = state.auth.accessToken;
		console.log("Access token in prepareHeaders:", token);
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery,
	endpoints: (build) => ({
		// Пример защищённого запроса
		user: build.query<IUser, void>({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
		}),
	}),
});

export const { useUserQuery } = userApi;
