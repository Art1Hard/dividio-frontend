import type {
	IAllocation,
	IAllocationData,
} from "@src/entities/allocation/model/allocation.types";
import type { AllocationSchema } from "@src/features/allocation/model/allocation.schema";
import BaseApi from "@src/shared/lib/basequery/baseapi";

export const allocationApi = BaseApi.injectEndpoints({
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
