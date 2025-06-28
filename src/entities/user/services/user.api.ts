import { createApi } from "@reduxjs/toolkit/query/react";
import type { IUser } from "@src/entities/user/model/user.types";
import baseQueryWithReauth from "@src/shared/lib/basequery/services/basequery";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: baseQueryWithReauth,
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
