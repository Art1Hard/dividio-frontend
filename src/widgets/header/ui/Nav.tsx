import { ROUTES } from "@src/routes";
import cn from "clsx";
import { match } from "path-to-regexp";
import { useLocation } from "react-router-dom";
import NavLink from "@src/widgets/header/ui/NavLink";
import { FaUserCircle } from "react-icons/fa";

interface NavProps {
	isAuthenticated: boolean;
}

const Nav = ({ isAuthenticated }: NavProps) => {
	const pathName = useLocation().pathname;

	return (
		<nav>
			<ul className="flex items-center gap-6 text-sm font-semibold">
				<li>
					<NavLink
						to={isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN}
						className={cn("flex items-center gap-x-2", {
							underline:
								match(pathName)(ROUTES.PROFILE) ||
								match(pathName)(ROUTES.LOGIN),
						})}>
						{isAuthenticated ? "Личный кабинет" : "Войти"}
						<FaUserCircle size={22} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
