import {
	incomeSchema,
	type IncomeSchema,
} from "@src/features/income/income.schema";
import useCustomForm from "../../../hooks/useCustomForm";
import { useUpdateIncomeMutation } from "@src/features/income/api/income.api";
import { toast } from "sonner";

const useEditIncome = (
	afterSubmit: () => void,
	id: string,
	defaultValues: IncomeSchema
) => {
	const [updateIncome] = useUpdateIncomeMutation();
	const { register, handleSubmit, isSubmitting, isDirty, errors } =
		useCustomForm(incomeSchema, defaultValues);

	const onSubmit = async (data: IncomeSchema) => {
		try {
			await updateIncome({ id, body: data });
			toast.success(`Доход "${data.title}" успешно обновлен`);
			afterSubmit();
		} catch (error) {
			toast.error("Ошибка при обновлении дохода");
			console.error("Failed to update income:", error);
		}
	};

	const submit = handleSubmit(onSubmit);

	return {
		register,
		submit,
		isSubmitting,
		isDirty,
		errors,
	};
};

export default useEditIncome;
