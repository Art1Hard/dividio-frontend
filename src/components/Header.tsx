import { Link } from "react-router-dom";
import { ROUTES } from "@src/routes";
import { useAppSelector } from "@hooks/redux";
import { TiChartBar } from "react-icons/ti";

const Header = () => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

	return (
		<header className="bg-slate-900 text-white shadow-md">
			<nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<div className="text-xl font-semibold tracking-wide">
					<Link
						to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.HOME}
						className="hover:text-blue-400 transition-colors flex items-center gap-1">
						<TiChartBar size={25} /> Dividio
					</Link>
				</div>

				<ul className="flex items-center gap-6 text-sm font-semibold">
					<li>
						<Link
							to={isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN}
							className="hover:text-blue-400 transition-colors">
							{isAuthenticated ? "Аккаунт" : "Войти"}
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
