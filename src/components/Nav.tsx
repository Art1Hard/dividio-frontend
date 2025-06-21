import { ROUTES } from "@src/routes";
import cn from "clsx";
import { match } from "path-to-regexp";
import { useLocation } from "react-router-dom";
import NavLink from "./ui/NavLink";

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
						className={cn({ underline: match(pathName)(ROUTES.PROFILE) })}>
						{isAuthenticated ? "Личный кабинет" : "Войти"}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
