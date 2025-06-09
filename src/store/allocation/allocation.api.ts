import { createApi } from "@reduxjs/toolkit/query/react";
import authBaseQuery from "../auth/auth.basequery";
import type { IAllocation, IAllocationData } from "@src/lib/types/types";
import type { CreateAllocationSchema } from "@src/lib/types/schemas/allocation";

export const allocationApi = createApi({
	reducerPath: "allocationApi",
	baseQuery: authBaseQuery(),
	tagTypes: ["Allocation"],
	endpoints: (build) => ({
		getAllocations: build.query<IAllocationData, void>({
			query: () => "/allocation",
			providesTags: ["Allocation"],
		}),

		createAllocation: build.mutation<IAllocation, CreateAllocationSchema>({
			query: (body) => ({
				url: "/allocation",
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["Allocation"],
		}),

		deleteAllocation: build.mutation<IAllocation, string>({
			query: (id) => ({
				url: `/allocation/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Allocation"],
		}),
	}),
});

export const {
	useGetAllocationsQuery,
	useCreateAllocationMutation,
	useDeleteAllocationMutation,
} = allocationApi;
