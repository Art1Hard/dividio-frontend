import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@src/store";
import type { IUser } from "@src/lib/types/types";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:4200/api",
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

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery,
	tagTypes: ["User"],
	endpoints: (build) => ({
		getUser: build.query<IUser, void>({
			query: () => "/user",
			providesTags: ["User"],
		}),
		updateUserName: build.mutation<IUser, { name: string }>({
			query: (body) => ({
				url: "/user",
				method: "PUT",
				body,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const { useGetUserQuery, useUpdateUserNameMutation } = userApi;
