import { z } from "zod";

export const allocationSchema = z.object({
	title: z.string().min(2, { message: "Название должно быть не меньше 2" }),
	percentage: z
		.number({ message: "Введите число" })
		.int({ message: "Число должно быть целым" })
		.min(5, { message: "Процент не может быть меньше 5" })
		.max(100, { message: "Процент не может быть больше 100" }),
	color: z
		.string({ message: "Цвет должен быть выбран" })
		.min(2, { message: "Цвет должен быть выбран" }),
});

export type AllocationSchema = z.infer<typeof allocationSchema>;
