import { Route, Routes } from "react-router-dom";
import DashboardPage from "@src/pages/DashboardPage";
import User from "@src/pages/UserPage";
import AuthGuard from "@src/components/guard/AuthGuard";
import GuestGuard from "@src/components/guard/GuestGuard";
import { ROUTES } from "@src/routes";
import AuthPage from "@pages/AuthPage";
import Header from "@components/Header";
import HomePage from "@pages/HomePage";
import CreateAllocationPage from "./pages/CreateAllocationPage";
import IncomeSourcePage from "./pages/IncomeSourcePage";

export default function App() {
	return (
		<div className="flex flex-col h-screen">
			<Header />

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

					<Route
						path={ROUTES.CREATE_ALLOCATION}
						element={
							<AuthGuard>
								<CreateAllocationPage />
							</AuthGuard>
						}
					/>

					<Route
						path={ROUTES.INCOME}
						element={
							<AuthGuard>
								<IncomeSourcePage />
							</AuthGuard>
						}
					/>

					<Route path="*" element={<h1>404 — Страница не найдена</h1>} />
				</Routes>
			</div>
		</div>
	);
}
