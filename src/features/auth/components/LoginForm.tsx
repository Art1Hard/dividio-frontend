import type { FC } from "react";
import Input from "@src/components/ui/Input";
import SwitchFormButton from "@src/features/auth/components/SwitchFormButton";
import useLogin from "@src/features/auth/hooks/useLogin";
import ActionButton from "@src/components/ui/buttons/ActionButton";

interface LoginFormProps {
	onClickSwitchForm: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onClickSwitchForm }) => {
	const { register, submit, errors, isSubmitting, isDirty } = useLogin();

	return (
		<div className="h-full flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-slate-200 dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
				<h2 className="text-2xl font-bold mb-6 text-center">Вход в аккаунт</h2>

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

					<div className="flex items-center justify-between text-sm text-slate-700 dark:text-slate-400">
						<label className="flex items-center gap-2">
							<input type="checkbox" className="accent-blue-500" />
							Запомнить меня
						</label>
						<a
							href="#"
							className="text-blue-600 dark:text-blue-400 hover:underline">
							Забыли пароль?
						</a>
					</div>

					<ActionButton
						type="submit"
						disabled={!isDirty || isSubmitting}
						className="w-full font-semibold">
						{isSubmitting ? "Входим..." : "Войти"}
					</ActionButton>
				</form>

				<SwitchFormButton
					onClickSwitchForm={onClickSwitchForm}
					prefix="Нет аккаунта?">
					Зарегистрироваться
				</SwitchFormButton>
			</div>
		</div>
	);
};
