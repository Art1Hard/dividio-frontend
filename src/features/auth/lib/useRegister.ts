import {
	registerSchema,
	type RegisterSchema,
} from "@src/features/auth/model/auth.schema";
import { useRegisterMutation } from "@src/features/auth/services/auth.api";
import useCustomForm from "@hooks/useCustomForm";
import { isServerError } from "@src/lib/utils/serverError";
import { toast } from "sonner";

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
		isDirty,
	} = useCustomForm(registerSchema);

	const onSubmit = async ({ email, password }: RegisterSchema) => {
		try {
			await registerUser({ email, password }).unwrap();
			toast.success("Вы успешно зарегистрированы!");
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

	return { register, submit, errors, isSubmitting, isDirty };
}

export default useRegister;
