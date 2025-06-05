import type { FC } from "react";
import { useLoginMutation } from "@store/auth/auth.api";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { type AuthSchema, authSchema } from "@lib/types/schemas/auth";
import { isServerError } from "@src/lib/serverError";
import Input from "@src/components/auth/ui/Input";
import SwitchButton from "./ui/SwitchButton";

interface LoginFormProps {
	onClickSwitchForm: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onClickSwitchForm }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		resetField,
		setError,
	} = useForm<AuthSchema>({
		resolver: zodResolver(authSchema),
		mode: "onBlur",
	});
	const [login] = useLoginMutation();

	const onSubmit = async (data: AuthSchema) => {
		try {
			await login(data).unwrap();

			reset();
		} catch (e) {
			if (isServerError(e)) {
				if (e.data.message === "User not found") {
					reset();
					setError("email", {
						type: "server",
						message: "Такого пользователя не существует",
					});
				}

				if (e.data.message === "Invalid password") {
					resetField("password");
					setError("password", {
						type: "server",
						message: "Неверный пароль, попробуйте снова",
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
					Вход в аккаунт
				</h2>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
					<Input
						type="text"
						label="email"
						labelText="Email"
						{...register("email")}
						error={errors.email}
						placeholder="you@example.com"
					/>

					<Input
						className="pr-10"
						type="password"
						label="password"
						labelText="Пароль"
						{...register("password")}
						error={errors.password}
						placeholder="••••••••"
						hasShowIcon
					/>

					<div className="flex items-center justify-between text-sm text-slate-400">
						<label className="flex items-center gap-2">
							<input type="checkbox" className="accent-blue-500" />
							Запомнить меня
						</label>
						<a href="#" className="text-blue-400 hover:underline">
							Забыли пароль?
						</a>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50">
						{isSubmitting ? "Входим..." : "Войти"}
					</button>
				</form>

				<SwitchButton
					onClickSwitchForm={onClickSwitchForm}
					prefix="Нет аккаунта?">
					Зарегистрироваться
				</SwitchButton>
			</div>
		</div>
	);
};
