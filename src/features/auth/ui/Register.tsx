import { type FC } from "react";
import SwitchFormButton from "@src/features/auth/ui/SwitchFormButton";
import useRegister from "@src/features/auth/lib/useRegister";
import { BaseButton } from "@src/shared/ui/buttons";
import Turnstile from "react-turnstile";
import { useAppSelector } from "@src/shared/lib/hooks/redux";
import {
	Input,
	InputError,
	InputGroup,
	InputLabel,
} from "@src/shared/ui/form/input";

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

				<form className="space-y-4" onSubmit={submit}>
					<InputGroup error={errors.email}>
						<InputLabel>Email:</InputLabel>
						<Input placeholder="you@example.com" {...register("email")} />
						<InputError />
					</InputGroup>

					<InputGroup error={errors.password}>
						<InputLabel>Пароль:</InputLabel>
						<Input
							placeholder="••••••••"
							className="pr-10"
							type="password"
							{...register("password")}
						/>
						<InputError />
					</InputGroup>

					<InputGroup error={errors.confirmPassword}>
						<InputLabel>Подтвердите пароль:</InputLabel>
						<Input
							placeholder="••••••••"
							className="pr-10"
							type="password"
							{...register("confirmPassword")}
						/>
						<InputError />
					</InputGroup>

					<div className="flex justify-center">
						<Turnstile
							className="w-full max-w-[300px] overflow-hidden"
							sitekey={import.meta.env.VITE_TURNSTILE_SITEKEY}
							onSuccess={(token) => setCaptchaToken(token)}
							onError={clearCaptchaToken}
							theme={currentTheme}
						/>
					</div>

					<BaseButton
						type="submit"
						disabled={!isDirty || isSubmitting}
						className="w-full font-semibold">
						{!isSubmitting ? "Зарегистрироваться" : "Идет регистрация..."}
					</BaseButton>
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
