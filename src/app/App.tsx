import { Route, Routes } from "react-router-dom";
import DashboardPage from "@src/pages/dashboard";
import User from "@src/pages/UserPage";
import { ROUTES } from "@src/routes";
import AuthPage from "@pages/AuthPage";
import Header from "@src/widgets/header/Header";
import HomePage from "@pages/HomePage";
import { Toaster } from "sonner";
import { useAppSelector } from "@src/shared/lib/hooks/redux";
import RouteGuard from "@src/app/guard/RouteGuard";

export default function App() {
	const theme = useAppSelector((state) => state.theme.currentTheme);

	return (
		<div className="flex flex-col h-screen">
			<Header />

			<Toaster theme={theme} position="bottom-center" />

			<div className="flex-1">
				<Routes>
					<Route
						path={ROUTES.HOME}
						element={
							<RouteGuard onlyGuest>
								<HomePage />
							</RouteGuard>
						}
					/>

					<Route
						path={ROUTES.DASHBOARD}
						element={
							<RouteGuard>
								<DashboardPage />
							</RouteGuard>
						}
					/>

					<Route
						path={ROUTES.LOGIN}
						element={
							<RouteGuard onlyGuest>
								<AuthPage />
							</RouteGuard>
						}
					/>
					<Route
						path={ROUTES.PROFILE}
						element={
							<RouteGuard>
								<User />
							</RouteGuard>
						}
					/>

					<Route path="*" element={<h1>404 — Страница не найдена</h1>} />
				</Routes>
			</div>
		</div>
	);
}
