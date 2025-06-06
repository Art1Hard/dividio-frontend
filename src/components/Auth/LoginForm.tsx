import type { FC } from "react";
import Input from "@src/components/auth/ui/Input";
import SwitchButton from "./ui/SwitchButton";
import useLogin from "@src/hooks/auth/useLogin";

interface LoginFormProps {
	onClickSwitchForm: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onClickSwitchForm }) => {
	const { register, submit, errors, isSubmitting } = useLogin();

	return (
		<div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-lg">
				<h2 className="text-2xl font-bold text-white mb-6 text-center">
					Вход в аккаунт
				</h2>

				<form onSubmit={submit} className="space-y-8">
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
