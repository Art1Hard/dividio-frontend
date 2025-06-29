import { type FC } from "react";
import Input from "@src/shared/ui/form/Input";
import SwitchFormButton from "@src/features/auth/ui/SwitchFormButton";
import useRegister from "@src/features/auth/lib/useRegister";
import ActionButton from "@src/shared/ui/buttons/ActionButton";
import Turnstile from "react-turnstile";
import { useAppSelector } from "@src/shared/lib/hooks/redux";

interface RegisterProps {
	onClickSwitchForm: () => void;
}

export const Register: FC<RegisterProps> = ({ onClickSwitchForm }) => {
	const {
		register,
		submit,
		isSubmitting,
		isDirty,
		errors,
		captcha: { setCaptchaToken, clearCaptchaToken },
	} = useRegister();
	const currentTheme = useAppSelector((state) => state.theme.currentTheme);

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

					<div className="flex justify-center">
						<Turnstile
							className="w-full max-w-[300px] overflow-hidden"
							sitekey={import.meta.env.VITE_TURNSTILE_SITEKEY}
							onSuccess={(token) => setCaptchaToken(token)}
							onError={clearCaptchaToken}
							theme={currentTheme}
						/>
					</div>

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
