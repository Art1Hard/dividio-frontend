import useCustomForm from "@src/shared/lib/hooks/useCustomForm";
import { isServerError } from "@src/shared/lib/utils/serverError";
import {
	useGetAllocationSchema,
	type AllocationSchema,
} from "@src/features/allocation/model/allocation.schema";
import { useUpdateAllocationMutation } from "@src/entities/allocation/services/allocation.api";
import { toast } from "sonner";

const useEditAllocation = (
	id: string,
	defaultValues: AllocationSchema,
	afterSubmit: () => void
) => {
	const allocationSchema = useGetAllocationSchema();

	const {
		handleSubmit,
		isSubmitting,
		isDirty,
		errors,
		setError,
		register,
		watch,
	} = useCustomForm(allocationSchema, defaultValues);

	const [updateAllocation] = useUpdateAllocationMutation();

	const onSubmit = async (data: AllocationSchema) => {
		try {
			await updateAllocation({ id, body: data }).unwrap();
			toast.success(`Категория "${data.title}" успешно обновлена`);
			afterSubmit();
		} catch (e) {
			toast.error("Ошибка при обновлении категории");
			if (isServerError(e)) {
				console.error("Произошла ошибка на стороне сервера", e);
				setError("percentage", { message: e.data.message });
			} else {
				console.error("Произошла неизвестная ошибка", e);
			}
		}
	};

	const submit = handleSubmit(onSubmit);

	return { submit, isSubmitting, isDirty, errors, register, watch };
};

export default useEditAllocation;
