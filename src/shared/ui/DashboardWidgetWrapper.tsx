import type { JSX, ReactNode } from "react";
import cn from "clsx";

interface DashboardWidgetWrapperProps {
	title: string;
	icon: JSX.Element;
	headerButton: JSX.Element;
	children: ReactNode;
	className?: string;
}

const DashboardWidgetWrapper = ({
	title,
	icon,
	headerButton,
	children,
	className,
}: DashboardWidgetWrapperProps) => {
	return (
		<div
			className={cn(
				"bg-slate-200 dark:bg-slate-800 rounded-2xl p-6 shadow-md",
				className
			)}>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-3">
					{icon}
					<h2 className="text-lg font-semibold">{title}</h2>
				</div>

				{headerButton}
			</div>

			{children}
		</div>
	);
};

export default DashboardWidgetWrapper;
