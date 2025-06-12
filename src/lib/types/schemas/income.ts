import { z } from "zod";

export const incomeSchema = z.object({
	title: z.string().min(2, { message: "Название должно быть не меньше 2" }),
	amount: z
		.number({ message: "Введите число" })
		.min(1000, { message: "Минимум 1000" }),
});

export type IncomeSchema = z.infer<typeof incomeSchema>;
