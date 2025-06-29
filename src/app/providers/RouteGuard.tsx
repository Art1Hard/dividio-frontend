import { useAppSelector } from "@src/shared/lib/hooks/redux";
import { ROUTES } from "@src/routes";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface RouteGuardProps {
	children: JSX.Element;
	onlyGuest?: boolean;
	redirectTo?: string;
}

const RouteGuard = ({ children, onlyGuest, redirectTo }: RouteGuardProps) => {
	const { isAuthenticated, isCheckingAuth } = useAppSelector(
		(state) => state.auth
	);

	if (isCheckingAuth) return <p>Загрузка...</p>;

	if (onlyGuest && isAuthenticated)
		return <Navigate to={redirectTo || ROUTES.DASHBOARD} replace />;
	if (!onlyGuest && !isAuthenticated)
		return <Navigate to={redirectTo || ROUTES.LOGIN} replace />;

	return children;
};

export default RouteGuard;
