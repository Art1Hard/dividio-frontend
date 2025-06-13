import { useAppSelector } from "@src/hooks/redux";
import { ROUTES } from "@src/routes";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }: { children: JSX.Element }) => {
	const { isAuthenticated, isCheckingAuth } = useAppSelector(
		(state) => state.auth
	);

	if (isCheckingAuth) return <p>Загрузка...</p>;

	if (isAuthenticated) {
		return <Navigate to={ROUTES.DASHBOARD} replace />;
	}

	return children;
};

export default GuestGuard;
