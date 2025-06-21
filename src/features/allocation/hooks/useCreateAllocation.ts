import useCustomForm from "@hooks/useCustomForm";
import { isServerError } from "@src/lib/utils/serverError";
import {
	allocationSchema,
	type AllocationSchema,
} from "@src/features/allocation/allocation.schema";
import { useCreateAllocationMutation } from "@src/features/allocation/api/allocation.api";
import { toast } from "sonner";

const useCreateAllocation = (afterSubmit: () => void) => {
	const {
		handleSubmit,
		isSubmitting,
		errors,
		setError,
		register,
		watch,
		isDirty,
	} = useCustomForm(allocationSchema, { color: "gray" });

	const [createAllocation] = useCreateAllocationMutation();

	const onSubmit = async (data: AllocationSchema) => {
		try {
			await createAllocation(data).unwrap();
			toast.success("Новая категория успешно добавлена");
			afterSubmit();
		} catch (e) {
			if (isServerError(e)) {
				console.error("Произошла ошибка на стороне сервера", e);
				setError("percentage", { message: e.data.message });
			} else {
				console.error("Произошла неизвестная ошибка", e);
			}
		}
	};

	const submit = handleSubmit(onSubmit);

	return { submit, isSubmitting, errors, register, watch, isDirty };
};

export default useCreateAllocation;
