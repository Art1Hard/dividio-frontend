import {
	registerSchema,
	type RegisterSchema,
} from "@src/features/auth/model/auth.schema";
import { useRegisterMutation } from "@src/features/auth/services/auth.api";
import useCustomForm from "@src/shared/lib/hooks/useCustomForm";
import { isServerError } from "@src/shared/lib/utils/serverError";
import { useState } from "react";
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

	const [token, setToken] = useState<string | null>(null);

	const onSubmit = async ({ email, password }: RegisterSchema) => {
		try {
			if (!token) {
				toast.warning("Пожалуйста, подтвердите, что вы человек");
				return;
			}

			await registerUser({
				user: { email, password },
				captchaToken: token,
			}).unwrap();
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

	const setCaptchaToken = (token: string) => setToken(token);
	const clearCaptchaToken = () => setToken(null);

	return {
		register,
		submit,
		errors,
		isSubmitting,
		isDirty,
		captcha: { setCaptchaToken, clearCaptchaToken },
	};
}

export default useRegister;
