import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useGetIncomeSchema = () => {
	const { t } = useTranslation();

	const incomeSchema = z.object({
		title: z.string().min(2, { message: t("income.schema.title") }),
		amount: z
			.number({ message: t("income.schema.amount.number") })
			.min(1000, { message: t("income.schema.amount.min") }),
	});

	return incomeSchema;
};

export type IncomeSchema = z.infer<ReturnType<typeof useGetIncomeSchema>>;
