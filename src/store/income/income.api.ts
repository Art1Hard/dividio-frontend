import type { IIncomeData } from "@src/lib/types/types";
import type { IncomeSchema } from "@src/lib/types/schemas/income";
import authBaseApi from "../auth/auth.baseapi";

export const incomeApi = authBaseApi.injectEndpoints({
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
