import type { ReactNode } from "react";
import cn from "clsx";

interface ActionButtonProps {
	color?: "primary" | "secondary" | "danger";
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
	children?: ReactNode;
}

const ActionButton = ({
	color = "primary",
	type = "button",
	children,
	className,
	onClick,
	disabled,
}: ActionButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={cn(
				"px-4 py-2 rounded-lg transition-colors disabled:opacity-70",
				className,
				color === "primary" &&
					"text-white bg-blue-600 hover:bg-blue-700 disabled:hover:bg-blue-600 font-semibold",
				color === "secondary" &&
					"text-slate-800 bg-slate-300/50 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 disabled:hover:bg-slate-300/50",
				color === "danger" && "bg-red-600 hover:bg-red-700"
			)}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default ActionButton;
