import { createApi } from "@reduxjs/toolkit/query/react";
import authBaseQuery from "../auth/auth.basequery";
import type { IAllocationData } from "@src/lib/types/types";

export const allocationApi = createApi({
	reducerPath: "allocationApi",
	baseQuery: authBaseQuery(),
	tagTypes: ["Allocation"],
	endpoints: (build) => ({
		getAllocations: build.query<IAllocationData, void>({
			query: () => "/allocation",
			providesTags: ["Allocation"],
		}),
	}),
});

export const { useGetAllocationsQuery } = allocationApi;
