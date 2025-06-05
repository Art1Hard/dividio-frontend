import { useState, type FC } from "react";
import { useLoginMutation } from "@store/auth/auth.api";
import { EyeClosedIcon, EyeOpenIcon } from "@src/assets/icons/EyeIcons";

interface LoginFormProps {
	onClickSwitchForm: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onClickSwitchForm }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [login, { isLoading }] = useLoginMutation();
	const [formError, setFormError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormError(null);

		try {
			await login({ email, password }).unwrap();

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.error("Ошибка авторизации:", err);

			if (err.data.message === "Invalid password")
				setFormError("Неправильный пароль");

			if (err.data.message === "User not found")
				setFormError("Такая почта не зарегистрирована");

			if (
				err.data.message[0] ===
				"password must be longer than or equal to 6 characters"
			)
				setFormError("Пароль должен быть больше 5 символов");
		}
	};

	const showPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setIsShowPassword((prev) => !prev);
	};

	const inputClass =
		"w-full px-4 py-2 rounded-lg bg-slate-700 text-white border focus:outline-none focus:ring-2 focus:ring-blue-500";

	return (
		<div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-lg">
				<h2 className="text-2xl font-bold text-white mb-6 text-center">
					Вход в аккаунт
				</h2>

				{formError && (
					<div className="mb-4 text-red-400 text-sm text-center">
						{formError}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-slate-300 mb-1">
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={`${inputClass} ${
								formError ? "border-red-500" : "border-slate-600"
							}`}
							placeholder="you@example.com"
							required
						/>
					</div>

					<div className="relative">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-slate-300 mb-1">
							Пароль
						</label>
						<input
							type={!isShowPassword ? "password" : "text"}
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={`${inputClass} ${
								formError ? "border-red-500" : "border-slate-600"
							}`}
							placeholder="••••••••"
							required
						/>
						<button
							onClick={showPassword}
							type="button"
							className="absolute right-3 top-9 text-slate-400 hover:text-white"
							aria-label="Показать или скрыть пароль">
							{!isShowPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
						</button>
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
						disabled={isLoading}
						className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50">
						{isLoading ? "Входим..." : "Войти"}
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
