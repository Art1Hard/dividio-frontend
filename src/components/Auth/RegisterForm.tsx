import { type FC } from "react";
import Input from "@src/components/ui/Input";
import SwitchButton from "./ui/SwitchButton";
import useRegister from "@hooks/auth/useRegister";

interface RegisterFormProps {
	onClickSwitchForm: () => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onClickSwitchForm }) => {
	const { register, submit, isSubmitting, errors } = useRegister();

	return (
		<div className="h-full flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-lg">
				<h2 className="text-2xl font-bold text-white mb-6 text-center">
					Регистрация
				</h2>

				<form onSubmit={submit}>
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
