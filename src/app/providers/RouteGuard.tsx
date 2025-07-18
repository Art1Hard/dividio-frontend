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

	if (isCheckingAuth)
		return (
			<div className="bg-slate-100 dark:bg-slate-900 fixed inset-0 text-center flex justify-center items-center">
				<div className="animate-spin w-10 h-10 border-4 border-blue-600 dark:border-slate-100 border-t-transparent dark:border-t-transparent rounded-full" />
			</div>
		);

	if (onlyGuest && isAuthenticated)
		return <Navigate to={redirectTo || ROUTES.DASHBOARD} replace />;
	if (!onlyGuest && !isAuthenticated)
		return <Navigate to={redirectTo || ROUTES.LOGIN} replace />;

	return children;
};

export default RouteGuard;
