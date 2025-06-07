import { createApi } from "@reduxjs/toolkit/query/react";
import type { IIncomeData } from "@src/lib/types/types";
import authBaseQuery from "../auth/auth.basequery";

export const incomeApi = createApi({
	reducerPath: "incomeApi",
	baseQuery: authBaseQuery(),
	tagTypes: ["Income"],
	endpoints: (build) => ({
		getIncomes: build.query<IIncomeData, void>({
			query: () => "/income",
			providesTags: ["Income"],
		}),
	}),
});

export const { useGetIncomesQuery } = incomeApi;
