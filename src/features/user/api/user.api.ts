import { createApi } from "@reduxjs/toolkit/query/react";
import type { IUser } from "@features/user/user.types";
import authBaseQuery from "../../auth/api/auth.basequery";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: authBaseQuery("/api/user"),
	tagTypes: ["User"],
	endpoints: (build) => ({
		getUser: build.query<IUser, void>({
			query: () => "",
			providesTags: ["User"],
		}),
		updateUserName: build.mutation<IUser, { name: string }>({
			query: (body) => ({
				url: "",
				method: "PUT",
				body,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const { useGetUserQuery, useUpdateUserNameMutation } = userApi;
