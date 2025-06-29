import type { IIncomeData } from "@src/entities/income/model/income.types";
import type { IncomeSchema } from "@src/features/income/model/income.schema";
import BaseApi from "@src/entities/auth/services/baseapi";

export const incomeApi = BaseApi.injectEndpoints({
	endpoints: (build) => ({
		getIncomes: build.query<IIncomeData, void>({
			query: () => "income",
			providesTags: ["Income"],
		}),

		createIncome: build.mutation<IIncomeData, IncomeSchema>({
			query: (body) => ({ url: "income", method: "POST", body }),
			invalidatesTags: ["Income", "Allocation"], // Invalidates Income and Allocation tags
		}),

		deleteIncome: build.mutation<IIncomeData, string>({
			query: (id) => ({ url: `income/${id}`, method: "DELETE" }),
			invalidatesTags: ["Income", "Allocation"], // Invalidates Income and Allocation tags
		}),

		updateIncome: build.mutation<
			IIncomeData,
			{ id: string; body: IncomeSchema }
		>({
			query: ({ id, body }) => ({
				url: `income/${id}`,
				method: "PUT",
				body,
			}),
			invalidatesTags: ["Income", "Allocation"], // Invalidates Income and Allocation tags
		}),
	}),
});

export const {
	useGetIncomesQuery,
	useCreateIncomeMutation,
	useDeleteIncomeMutation,
	useUpdateIncomeMutation,
} = incomeApi;
