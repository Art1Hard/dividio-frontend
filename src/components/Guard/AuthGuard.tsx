import { useAppSelector } from "@src/hooks/redux";
import { ROUTES } from "@src/routes";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
	const { isAuthenticated, isCheckingAuth } = useAppSelector(
		(state) => state.auth
	);

	if (isCheckingAuth) return <p>Загрузка...</p>;

	if (!isAuthenticated) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	return children;
};

export default AuthGuard;
