import { type FC } from "react";
import cn from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	registerSchema,
	type RegisterSchema,
} from "@src/lib/types/schemas/auth";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@src/store/auth/auth.api";
import { isServerError } from "@src/lib/serverError";

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

	const inputClass = cn(
		"w-full px-4 py-2 rounded-lg bg-slate-700 text-white border focus:outline-none focus:ring-2 focus:ring-blue-500"
	);

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
					<div className="relative mb-9">
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

					<div className="relative mb-9">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-slate-300 mb-1">
							Пароль
						</label>
						<input
							{...register("password")}
							type="password"
							id="password"
							className={cn(inputClass, {
								"border-red-500": errors.password,
								"border-slate-600": !errors.password,
							})}
							placeholder="••••••••"
						/>
						{errors.password && (
							<p className="absolute bottom-[-25px] text-[14px] text-red-500 left-0">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="relative mb-12">
						<label
							htmlFor="confirm-password"
							className="block text-sm font-medium text-slate-300 mb-1">
							Подтвердить пароль
						</label>
						<input
							{...register("confirmPassword")}
							type="password"
							id="confirm-password"
							className={cn(inputClass, {
								"border-red-500": errors.confirmPassword,
								"border-slate-600": !errors.confirmPassword,
							})}
							placeholder="••••••••"
						/>
						{errors.confirmPassword && (
							<p className="absolute bottom-[-25px] text-[14px] text-red-500 left-0">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50">
						{!isSubmitting ? "Зарегистрироваться" : "Идет регистрация..."}
					</button>
				</form>

				<p className="mt-6 text-center text-sm text-slate-400">
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							onClickSwitchForm();
						}}
						className="text-blue-400 hover:underline">
						Авторизация
					</button>
				</p>
			</div>
		</div>
	);
};
