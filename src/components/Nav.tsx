import { ROUTES } from "@src/routes";
import cn from "clsx";
import { Link } from "react-router-dom";
import { match } from "path-to-regexp";
import { useLocation } from "react-router-dom";

interface NavProps {
	isAuthenticated: boolean;
}

const Nav = ({ isAuthenticated }: NavProps) => {
	const pathName = useLocation().pathname;

	return (
		<nav>
			<ul className="flex items-center gap-6 text-sm font-semibold">
				<li>
					<Link
						to={isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN}
						className={cn("hover:text-blue-400 transition-colors", {
							underline: match(pathName)(ROUTES.PROFILE),
						})}>
						{isAuthenticated ? "Личный кабинет" : "Войти"}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
