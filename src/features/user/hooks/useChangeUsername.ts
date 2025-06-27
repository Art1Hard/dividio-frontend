import { type UserSchema, userSchema } from "@src/features/user/user.schema";
import { useUpdateUserNameMutation } from "@src/features/user/services/user.api";
import { useEffect } from "react";
import useCustomForm from "@hooks/useCustomForm";

const useChangeUsername = (
	name: string | undefined,
	disableEditMode: () => void
) => {
	const [updateUser] = useUpdateUserNameMutation();

	const { register, handleSubmit, reset, errors, isSubmitting } =
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
	};
};

export default useChangeUsername;
