import type { JSX, ReactNode } from "react";

interface DashboardSectionProps {
	title: string;
	icon: JSX.Element;
	headerButton: JSX.Element;
	children: ReactNode;
}

const DashboardSection = ({
	title,
	icon,
	headerButton,
	children,
}: DashboardSectionProps) => {
	return (
		<div className="bg-slate-200 dark:bg-slate-800 rounded-2xl p-6 shadow-md">
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

export default DashboardSection;
