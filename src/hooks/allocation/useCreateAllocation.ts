import useCustomForm from "@hooks/useCustomForm";
import { isServerError } from "@src/lib/serverError";
import {
	createAllocationSchema,
	type CreateAllocationSchema,
} from "@src/lib/types/schemas/allocation";
import { useCreateAllocationMutation } from "@src/store/allocation/allocation.api";

const useCreateAllocation = () => {
	const { handleSubmit, isSubmitting, errors, setError, register, watch } =
		useCustomForm(createAllocationSchema, { color: "gray-500" });

	const [createAllocation] = useCreateAllocationMutation();

	const onSubmit = async (data: CreateAllocationSchema) => {
		try {
			await createAllocation(data).unwrap();
			console.log(data);
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

export default useCreateAllocation;
