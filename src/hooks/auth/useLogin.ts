import { authSchema, type AuthSchema } from "@src/lib/types/schemas/auth";
import { useLoginMutation } from "@src/store/auth/auth.api";
import useCustomForm from "@hooks/useCustomForm";
import { isServerError } from "@src/lib/serverError";

function useLogin() {
	const [login] = useLoginMutation();

	const {
		register,
		handleSubmit,
		errors,
		setError,
		reset,
		resetField,
		isSubmitting,
	} = useCustomForm(authSchema);

	const onSubmit = async (data: AuthSchema) => {
		try {
			await login(data).unwrap();

			reset();
		} catch (e) {
			if (isServerError(e)) {
				switch (e.data.message) {
					case "User not found":
						reset();
						setError("email", {
							type: "server",
							message: "Такого пользователя не существует",
						});
						break;

					case "Invalid password":
						resetField("password");
						setError("password", {
							type: "server",
							message: "Неверный пароль, попробуйте снова",
						});
						break;

					default:
						console.error("Необработанная ошибка:", e);
						setError("password", {
							type: "server",
							message: "Что-то пошло не так. Попробуйте позже.",
						});
				}
			} else {
				if (
					e &&
					typeof e === "object" &&
					"status" in e &&
					e.status === "FETCH_ERROR"
				) {
					setError("password", {
						type: "server",
						message: "Что-то пошло не так. Попробуйте позже.",
					});
				}

				console.error("Неизвестная ошибка авторизации:", e);
			}
		}
	};

	const submit = handleSubmit(onSubmit);

	return { register, submit, errors, isSubmitting };
}

export default useLogin;
