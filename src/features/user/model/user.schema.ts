import { z } from "zod";

export const userSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Имя должно содержать не менее 2 символов" }),
});

export type UserSchema = z.infer<typeof userSchema>;
