import type { IAllocation, IAllocationData } from "@src/lib/types/types";
import type { AllocationSchema } from "@src/lib/types/schemas/allocation";
import authBaseApi from "@src/store/auth/auth.baseapi";

export const allocationApi = authBaseApi.injectEndpoints({
	endpoints: (build) => ({
		getAllocations: build.query<IAllocationData, void>({
			query: () => "/allocation",
			providesTags: ["Allocation"],
		}),

		createAllocation: build.mutation<IAllocation, AllocationSchema>({
			query: (body) => ({
				url: "/allocation",
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["Allocation"],
		}),

		updateAllocation: build.mutation<
			IAllocation,
			{ id: string; body: AllocationSchema }
		>({
			query: ({ id, body }) => ({
				url: `/allocation/${id}`,
				method: "PUT",
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
	useUpdateAllocationMutation,
	useDeleteAllocationMutation,
} = allocationApi;
