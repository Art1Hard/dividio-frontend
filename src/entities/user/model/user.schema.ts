import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useGetUserSchema = () => {
	const { t } = useTranslation();

	return z.object({
		name: z.string().min(2, { message: t("account.schema.name.min") }),
	});
};

export type UserSchema = z.infer<ReturnType<typeof useGetUserSchema>>;
