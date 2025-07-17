import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

export interface BaseButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: "primary" | "secondary" | "danger";
}

const BaseButton = ({
	color = "primary",
	className,
	children,
	...props
}: BaseButtonProps) => {
	return (
		<button
			className={cn(
				"px-4 py-2 rounded-lg transition-colors disabled:opacity-70",
				color === "primary" &&
					"text-white bg-blue-600 hover:bg-blue-700 disabled:hover:bg-blue-600 font-semibold",
				color === "secondary" &&
					"text-slate-800 bg-slate-300/50 hover:bg-slate-300 disabled:hover:bg-slate-300/50 dark:text-white dark:bg-slate-600 dark:hover:bg-slate-700 dark:disabled:hover:bg-slate-600",
				color === "danger" && "text-white bg-red-600 hover:bg-red-700",
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default BaseButton;
