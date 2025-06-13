import {
	registerSchema,
	type RegisterSchema,
} from "@src/lib/types/schemas/auth";
import { useRegisterMutation } from "@src/store/auth/auth.api";
import useCustomForm from "@hooks/useCustomForm";
import { isServerError } from "@src/lib/serverError";

function useRegister() {
	const [registerUser] = useRegisterMutation();

	const {
		register,
		handleSubmit,
		errors,
		setError,
		reset,
		resetField,
		isSubmitting,
	} = useCustomForm(registerSchema);

	const onSubmit = async ({ email, password }: RegisterSchema) => {
		try {
			await registerUser({ email, password }).unwrap();

			reset();
		} catch (e) {
			if (isServerError(e)) {
				if (e.data.message === "User with this email is already exist") {
					resetField("password");
					resetField("confirmPassword");
					setError("email", {
						type: "server",
						message: "Пользователь с такой почтой уже зарегистрирован",
					});
				}
			} else {
				console.error("Неизвестная ошибка авторизации:", e);
			}
		}
	};

	const submit = handleSubmit(onSubmit);

	return { register, submit, errors, isSubmitting };
}

export default useRegister;
