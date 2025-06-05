import { type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	registerSchema,
	type RegisterSchema,
} from "@src/lib/types/schemas/auth";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@src/store/auth/auth.api";
import { isServerError } from "@src/lib/serverError";
import Input from "@components/auth/ui/Input";
import SwitchButton from "./ui/SwitchButton";

interface RegisterFormProps {
	onClickSwitchForm: () => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onClickSwitchForm }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setError,
	} = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		mode: "onBlur",
	});

	const [registerUser] = useRegisterMutation();

	const onSubmit = async ({ email, password }: RegisterSchema) => {
		try {
			await registerUser({ email, password }).unwrap();

			reset();
		} catch (e) {
			if (isServerError(e)) {
				if (e.data.message === "User with this email is already exist") {
					reset();
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

	return (
		<div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-lg">
				<h2 className="text-2xl font-bold text-white mb-6 text-center">
					Регистрация
				</h2>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						rootClassName="mb-8"
						type="text"
						label="email"
						labelText="Email"
						{...register("email")}
						error={errors.email}
						placeholder="you@example.com"
					/>

					<Input
						rootClassName="mb-8"
						type="password"
						label="password"
						labelText="Пароль"
						{...register("password")}
						error={errors.password}
						placeholder="••••••••"
					/>

					<Input
						rootClassName="mb-12"
						type="password"
						label="confirm-password"
						labelText="Подтвердите пароль"
						{...register("confirmPassword")}
						error={errors.confirmPassword}
						placeholder="••••••••"
					/>

					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50">
						{!isSubmitting ? "Зарегистрироваться" : "Идет регистрация..."}
					</button>
				</form>

				<SwitchButton
					onClickSwitchForm={onClickSwitchForm}
					prefix="Вы зарегистрированы?">
					Войти
				</SwitchButton>
			</div>
		</div>
	);
};
