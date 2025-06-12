import useCustomForm from "@hooks/useCustomForm";
import { isServerError } from "@src/lib/serverError";
import {
	allocationSchema,
	type AllocationSchema,
} from "@src/lib/types/schemas/allocation";
import { ROUTES } from "@src/routes";
import { useCreateAllocationMutation } from "@src/store/allocation/allocation.api";
import { useNavigate } from "react-router-dom";

const useCreateAllocation = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		isSubmitting,
		errors,
		setError,
		register,
		watch,
		isDirty,
	} = useCustomForm(allocationSchema, { color: "gray-500" });

	const [createAllocation] = useCreateAllocationMutation();

	const onSubmit = async (data: AllocationSchema) => {
		try {
			await createAllocation(data).unwrap();
			navigate(ROUTES.DASHBOARD);
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
