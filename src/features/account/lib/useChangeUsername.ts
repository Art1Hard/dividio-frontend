import {
	type UserSchema,
	userSchema,
} from "@src/entities/user/model/user.schema";
import { useUpdateUserNameMutation } from "@src/entities/user/services/user.api";
import { useEffect } from "react";
import useCustomForm from "@src/shared/lib/hooks/useCustomForm";

const useChangeUsername = (
	name: string | undefined,
	disableEditMode: () => void
) => {
	const [updateUser] = useUpdateUserNameMutation();

	const { register, handleSubmit, reset, errors, isSubmitting, isDirty } =
		useCustomForm(userSchema);

	useEffect(() => {
		if (name) {
			reset({ name });
		}
	}, [name, reset]);

	const onSubmit = async (data: UserSchema) => {
		try {
			await updateUser(data);
			disableEditMode();
		} catch (e) {
			console.error("Произошла ошибка на сервере при изменении: ", e);
		}
	};

	const submit = handleSubmit(onSubmit);

	return {
		register,
		submit,
		errors,
		isSubmitting,
		isDirty,
	};
};

export default useChangeUsername;
