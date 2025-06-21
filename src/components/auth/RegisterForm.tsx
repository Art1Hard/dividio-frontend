import { type FC } from "react";
import Input from "@src/components/UI/Input";
import SwitchFormButton from "../UI/SwitchFormButton";
import useRegister from "@hooks/auth/useRegister";
import ActionButton from "@components/UI/ActionButton";

interface RegisterFormProps {
	onClickSwitchForm: () => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onClickSwitchForm }) => {
	const { register, submit, isSubmitting, isDirty, errors } = useRegister();

	return (
		<div className="h-full flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-slate-200 dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
				<h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>

				<form className="space-y-8" onSubmit={submit}>
					<Input
						type="text"
						label="email"
						labelText="Email"
						{...register("email")}
						error={errors.email}
						placeholder="you@example.com"
					/>

					<Input
						type="password"
						label="password"
						labelText="Пароль"
						{...register("password")}
						error={errors.password}
						placeholder="••••••••"
					/>

					<Input
						type="password"
						label="confirm-password"
						labelText="Подтвердите пароль"
						{...register("confirmPassword")}
						error={errors.confirmPassword}
						placeholder="••••••••"
					/>

					<ActionButton
						type="submit"
						disabled={!isDirty || isSubmitting}
						className="w-full font-semibold">
						{!isSubmitting ? "Зарегистрироваться" : "Идет регистрация..."}
					</ActionButton>
				</form>

				<SwitchFormButton
					onClickSwitchForm={onClickSwitchForm}
					prefix="Вы зарегистрированы?">
					Войти
				</SwitchFormButton>
			</div>
		</div>
	);
};
