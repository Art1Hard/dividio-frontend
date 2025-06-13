import type { FC } from "react";
import type { IconType } from "react-icons";
import { FaCoins } from "react-icons/fa";
import cn from "clsx";

interface TotalIncomeProps {
	title?: string;
	value: number;
	postfix?: string;
	icon?: {
		IconComponent: IconType;
		color?: string;
		bgColor?: string;
	};
}

const StatisticCard: FC<TotalIncomeProps> = ({
	value = 0,
	title = "Общий доход",
	postfix = " ₽",
	icon,
}) => {
	const formattedValue = value.toLocaleString("ru-RU");
	const IconComponent = icon?.IconComponent;

	return (
		<div className="max-w-sm bg-slate-800 rounded-2xl p-6 shadow-md flex flex-1 items-center gap-4">
			<div
				className={cn(
					"p-3 rounded-full text-white",
					icon?.bgColor ?? "bg-blue-600",
					icon?.color ?? "text-white"
				)}>
				{IconComponent ? <IconComponent size={24} /> : <FaCoins size={24} />}
			</div>
			<div>
				<h2 className="text-lg text-slate-400">{title}</h2>
				<p className="text-3xl font-bold">
					{formattedValue}
					{postfix}
				</p>
			</div>
		</div>
	);
};

export default StatisticCard;
