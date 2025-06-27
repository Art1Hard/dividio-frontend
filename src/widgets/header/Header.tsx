import { ROUTES } from "@src/routes";
import { useAppSelector } from "@src/shared/lib/hooks/redux";
import { TiChartBar } from "react-icons/ti";
import Nav from "./ui/Nav";
import NavLink from "./ui/NavLink";

const Header = () => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

	return (
		<header className="shadow-md">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<div className="text-xl font-semibold tracking-wide">
					<NavLink
						to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.HOME}
						className="flex items-center gap-1">
						<TiChartBar size={25} /> Dividio
					</NavLink>
				</div>

				<Nav isAuthenticated={isAuthenticated} />
			</div>
		</header>
	);
};

export default Header;
