import type { FC } from "react";
import { FaCoins } from "react-icons/fa";

interface TotalIncomeProps {
	title?: string;
	value: number;
}

const TotalIncome: FC<TotalIncomeProps> = ({
	value = 0,
	title = "Общий доход",
}) => {
	const formattedValue = value.toLocaleString("ru-RU");

	return (
		<div className="max-w-sm bg-slate-800 rounded-2xl p-6 shadow-md flex flex-1 items-center gap-4">
			<div className="bg-blue-600 p-3 rounded-full text-white">
				<FaCoins size={24} />
			</div>
			<div>
				<h2 className="text-lg text-slate-400">{title}</h2>
				<p className="text-3xl font-bold">{formattedValue} ₽</p>
			</div>
		</div>
	);
};

export default TotalIncome;
