import { z } from "zod";

export const authSchema = z.object({
	email: z.string().email({ message: "Введите корректную почту" }),
	password: z
		.string()
		.min(6, { message: "Пароль должен содержать не менее 6 символов" }),
});

export const registerSchema = authSchema
	.extend({
		confirmPassword: z
			.string()
			.nonempty({ message: "Поле не может быть пустым" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Пароли не совпадают",
		path: ["confirmPassword"],
	});

export type AuthSchema = z.infer<typeof authSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
