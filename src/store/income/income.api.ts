import { createApi } from "@reduxjs/toolkit/query/react";
import type { IIncomeData } from "@src/lib/types/types";
import authBaseQuery from "../auth/auth.basequery";
import type { IncomeSchema } from "@src/lib/types/schemas/income";

export const incomeApi = createApi({
	reducerPath: "incomeApi",
	baseQuery: authBaseQuery("/income"),
	tagTypes: ["Income"],
	endpoints: (build) => ({
		getIncomes: build.query<IIncomeData, void>({
			query: () => "",
			providesTags: ["Income"],
		}),

		createIncome: build.mutation<IIncomeData, IncomeSchema>({
			query: (body) => ({ url: "", method: "POST", body }),
			invalidatesTags: ["Income"],
		}),

		deleteIncome: build.mutation<IIncomeData, string>({
			query: (id) => ({ url: `/${id}`, method: "DELETE" }),
			invalidatesTags: ["Income"],
		}),
	}),
});

export const {
	useGetIncomesQuery,
	useCreateIncomeMutation,
	useDeleteIncomeMutation,
} = incomeApi;
