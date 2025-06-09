import { z } from "zod";

export const createAllocationSchema = z.object({
	title: z.string().min(2, { message: "Название должно быть не меньше 2" }),
	percentage: z
		.number({ message: "Введите число" })
		.int({ message: "Число должно быть целым" })
		.min(5, { message: "Процент не может быть меньше 5" }),
	color: z
		.string({ message: "Цвет должен быть выбран" })
		.min(2, { message: "Цвет должен быть выбран" }),
});

export type CreateAllocationSchema = z.infer<typeof createAllocationSchema>;
