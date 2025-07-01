import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import cn from "clsx";

interface NavLinkProps {
	to: string;
	children: ReactNode;
	className?: string;
	title?: string;
}

const NavLink = ({ to, children, className, title }: NavLinkProps) => {
	return (
		<Link
			title={title}
			to={to}
			className={cn(
				" hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
				className
			)}>
			{children}
		</Link>
	);
};

export default NavLink;
