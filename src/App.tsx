import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DashboardPage from "@src/pages/DashboardPage";
import { useAppSelector } from "@hooks/redux";
import User from "@pages/User";
import AuthGuard from "@components/Guard/AuthGuard";
import GuestGuard from "@components/Guard/GuestGuard";
import { ROUTES } from "@src/routes";
import AuthPage from "@pages/AuthPage";

export default function App() {
	const { isAuthenticated } = useAppSelector((state) => state.auth);

	return (
		<BrowserRouter>
			<nav>
				<Link to={ROUTES.HOME}>Доска</Link> |{" "}
				<Link to={isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN}>
					Аккаунт
				</Link>{" "}
				| <Link to="/user/123">Пользователь 123</Link>
			</nav>

			<Routes>
				<Route
					path={ROUTES.HOME}
					element={
						<AuthGuard>
							<DashboardPage />
						</AuthGuard>
					}
				/>
				<Route
					path={ROUTES.LOGIN}
					element={
						<GuestGuard>
							<AuthPage />
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
