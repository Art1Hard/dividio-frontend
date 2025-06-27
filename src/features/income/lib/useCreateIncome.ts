import useCustomForm from "@src/shared/lib/hooks/useCustomForm";
import { isServerError } from "@src/shared/lib/utils/serverError";
import {
	incomeSchema,
	type IncomeSchema,
} from "@src/features/income/model/income.schema";
import { useCreateIncomeMutation } from "@src/features/income/services/income.api";
import { toast } from "sonner";

const useCreateIncome = (afterSubmit: () => void) => {
	const { handleSubmit, isSubmitting, errors, setError, register, isDirty } =
		useCustomForm(incomeSchema);

	const [createIncome] = useCreateIncomeMutation();

	const onSubmit = async (data: IncomeSchema) => {
		try {
			await createIncome(data).unwrap();
			toast.success("Новый доход успешно добавлен");
			afterSubmit();
		} catch (e) {
			toast.error("Ошибка при создании дохода");
			if (isServerError(e)) {
				console.error("Произошла ошибка на стороне сервера", e);
				setError("amount", { message: e.data.message });
			} else {
				console.error("Произошла неизвестная ошибка", e);
			}
		}
	};

	const submit = handleSubmit(onSubmit);

	return { submit, isSubmitting, isDirty, errors, register };
};

export default useCreateIncome;
