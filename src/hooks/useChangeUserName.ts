import { type UserSchema, userSchema } from "@src/lib/types/schemas/user";
import type { IUser } from "@src/lib/types/types";
import { useUpdateUserNameMutation } from "@src/store/user/user.api";
import { useEffect, useState } from "react";
import useCustomForm from "./useCustomForm";

const useChangeUserName = (user: IUser | undefined) => {
	const [editMode, setEditMode] = useState(false);
	const [updateUser] = useUpdateUserNameMutation();

	const { register, handleSubmit, reset, errors, isSubmitting } =
		useCustomForm(userSchema);

	useEffect(() => {
		if (user && user.name) {
			reset({ name: user.name });
		}
	}, [user, reset]);

	const disableEditMode = () => {
		reset({ name: (user && user.name) || "" });
		setEditMode(false);
	};

	const enableEditMode = () => setEditMode(true);

	const onSubmit = async (data: UserSchema) => {
		try {
			await updateUser(data);
			setEditMode(false);
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
		editMode,
		enableEditMode,
		disableEditMode,
	};
};

export default useChangeUserName;
