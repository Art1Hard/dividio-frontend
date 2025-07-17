import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

export interface GlassButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: "blue" | "red";
}

const GlassButton = ({
	color = "blue",
	className,
	...props
}: GlassButtonProps) => {
	return (
		<button
			className={cn(
				"p-2 rounded-md bg-slate-300 dark:bg-slate-600 transition-colors",
				color === "blue" && "hover:bg-blue-500 dark:hover:bg-blue-500",
				color === "red" && "hover:bg-red-500 dark:hover:bg-red-500",
				className
			)}
			{...props}></button>
	);
};

export default GlassButton;
