import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useGetAllocationSchema = () => {
	const { t } = useTranslation();

	const allocationSchema = z.object({
		title: z.string().min(2, { message: t("allocation.schema.title") }),
		percentage: z
			.number({ message: t("allocation.schema.percentage.number") })
			.int({ message: t("allocation.schema.percentage.int") })
			.min(5, { message: t("allocation.schema.percentage.min") })
			.max(100, { message: t("allocation.schema.percentage.max") }),
		color: z
			.string({ message: t("allocation.schema.color") })
			.min(2, { message: t("allocation.schema.color") }),
	});

	return allocationSchema;
};

export type AllocationSchema = z.infer<
	ReturnType<typeof useGetAllocationSchema>
>;
