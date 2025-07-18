import { ROUTES } from "@src/routes";
import cn from "clsx";
import { match } from "path-to-regexp";
import { useLocation } from "react-router-dom";
import NavLink from "@src/widgets/header/ui/NavLink";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ToggleTheme } from "@src/features/theme/components/ToggleTheme";
import LanguageSwitcher from "@src/features/language/ui/LanguageSwitcher";

interface NavProps {
	isAuthenticated: boolean;
}

const Nav = ({ isAuthenticated }: NavProps) => {
	const { t } = useTranslation();
	const pathName = useLocation().pathname;

	return (
		<nav>
			<ul className="flex items-center gap-4 text-sm font-semibold">
				<li>
					<NavLink
						title={
							isAuthenticated
								? t("header.account.user")
								: t("header.account.signIn")
						}
						to={isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN}
						className={cn("flex items-center gap-x-2", {
							underline:
								match(pathName)(ROUTES.PROFILE) ||
								match(pathName)(ROUTES.LOGIN),
						})}>
						<FaUserCircle size={22} />
					</NavLink>
				</li>
				<li>
					<ToggleTheme sizeIcon={24} />
				</li>
				<li>
					<LanguageSwitcher />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
