import { LoginForm } from "@components/Auth/LoginForm";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import { useAppSelector } from "@hooks/redux";
import User from "@pages/User";
import AuthGuard from "@components/Guard/AuthGuard";
import GuestGuard from "@components/Guard/GuestGuard";
import { ROUTES } from "@src/routes";
import { RegisterForm } from "./components/Auth/RegisterForm";

export default function App() {
	const { isAuthenticated } = useAppSelector((state) => state.auth);

	return (
		<BrowserRouter>
			<nav>
				<Link to={ROUTES.HOME}>Главная</Link> |{" "}
				<Link to={isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN}>
					Аккаунт
				</Link>{" "}
				| <Link to="/user/123">Пользователь 123</Link>
			</nav>

			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route
					path={ROUTES.LOGIN}
					element={
						<GuestGuard>
							<LoginForm />
						</GuestGuard>
					}
				/>

				<Route
					path={ROUTES.REGISTER}
					element={
						<GuestGuard>
							<RegisterForm />
						</GuestGuard>
					}
				/>
				<Route
					path={ROUTES.PROFILE}
					element={
						<AuthGuard>
							<User />
						</AuthGuard>
					}
				/>
				<Route path="*" element={<h1>404 — Страница не найдена</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
