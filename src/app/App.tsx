import { Route, Routes } from "react-router-dom";
import DashboardPage from "@src/pages/DashboardPage";
import User from "@src/pages/UserPage";
import AuthGuard from "@src/components/guard/AuthGuard";
import GuestGuard from "@src/components/guard/GuestGuard";
import { ROUTES } from "@src/routes";
import AuthPage from "@pages/AuthPage";
import Header from "@components/Header";
import HomePage from "@pages/HomePage";
import { Toaster } from "sonner";
import { useAppSelector } from "@src/hooks/redux";

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
							<GuestGuard>
								<HomePage />
							</GuestGuard>
						}
					/>

					<Route
						path={ROUTES.DASHBOARD}
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
			</div>
		</div>
	);
}
