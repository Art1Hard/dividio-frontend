import { useState, type FC } from "react";
import { useLoginMutation } from "@store/auth/auth.api";
import { EyeClosedIcon, EyeOpenIcon } from "@src/assets/icons/EyeIcons";
import { useForm } from "react-hook-form";
import cn from "clsx";

import { zodResolver } from "@hookform/resolvers/zod";
import { type AuthSchema, authSchema } from "@lib/types/schemas/auth";
import { isServerError } from "@src/lib/serverError";

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
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [login] = useLoginMutation();

	const showPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setIsShowPassword((prev) => !prev);
	};

	const inputClass = cn(
		"w-full px-4 py-2 rounded-lg bg-slate-700 text-white border focus:outline-none focus:ring-2 focus:ring-blue-500"
	);

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
					<div className="relative">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-slate-300 mb-1">
							Email
						</label>
						<input
							{...register("email")}
							type="text"
							id="email"
							className={cn(inputClass, {
								"border-red-500": errors.email,
								"border-slate-600": !errors.email,
							})}
							placeholder="you@example.com"
						/>
						{errors.email && (
							<p className="absolute bottom-[-25px] text-[14px] text-red-500 left-0">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="relative">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-slate-300 mb-1">
							Пароль
						</label>
						<input
							{...register("password")}
							type={!isShowPassword ? "password" : "text"}
							id="password"
							className={cn(inputClass, {
								"border-red-500": errors.password,
								"border-slate-600": !errors.password,
							})}
							placeholder="••••••••"
						/>
						<button
							onClick={showPassword}
							type="button"
							className="absolute right-3 top-9 text-slate-400 hover:text-white"
							aria-label="Показать или скрыть пароль">
							{!isShowPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
						</button>
						{errors.password && (
							<p className="absolute bottom-[-25px] text-[14px] text-red-500 left-0">
								{errors.password.message}
							</p>
						)}
					</div>

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

				<p className="mt-6 text-center text-sm text-slate-400">
					Нет аккаунта?{" "}
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							onClickSwitchForm();
						}}
						className="text-blue-400 hover:underline">
						Зарегистрироваться
					</button>
				</p>
			</div>
		</div>
	);
};
