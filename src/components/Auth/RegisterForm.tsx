import { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@src/assets/icons/EyeIcons";
import { Link } from "react-router-dom";
import { ROUTES } from "@src/routes";

export const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isShowPassword, setIsShowPassword] = useState(false);

	const showPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setIsShowPassword((prev) => !prev);
	};

	const inputClass =
		"w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500";

	return (
		<div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-lg">
				<h2 className="text-2xl font-bold text-white mb-6 text-center">
					Регистрация
				</h2>

				<form>
					<div className="mb-5">
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
							className={inputClass}
							placeholder="you@example.com"
							required
						/>
					</div>

					<div className="relative mb-14">
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
							className={inputClass}
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

					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50">
						Зарегистрироваться
					</button>
				</form>

				<p className="mt-6 text-center text-sm text-slate-400">
					<Link to={ROUTES.LOGIN} className="text-blue-400 hover:underline">
						Авторизация
					</Link>
				</p>
			</div>
		</div>
	);
};
