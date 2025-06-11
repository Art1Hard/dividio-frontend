import useCustomForm from "@hooks/useCustomForm";
import { isServerError } from "@src/lib/serverError";
import {
	allocationSchema,
	type AllocationSchema,
} from "@src/lib/types/schemas/allocation";
import { useUpdateAllocationMutation } from "@src/store/allocation/allocation.api";

const useEditAllocation = (
	id: string,
	defaultValues: AllocationSchema,
	afterSubmit: () => void
) => {
	const { handleSubmit, isSubmitting, errors, setError, register, watch } =
		useCustomForm(allocationSchema, defaultValues);

	const [updateAllocation] = useUpdateAllocationMutation();

	const onSubmit = async (data: AllocationSchema) => {
		try {
			await updateAllocation({ id, body: data }).unwrap();
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

	return { submit, isSubmitting, errors, register, watch };
};

export default useEditAllocation;
