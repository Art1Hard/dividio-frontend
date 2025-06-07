import { FaChartPie } from "react-icons/fa";
import ProgressBar from "@components/dashboard/ui/ProgressBar";

interface IAllocation {
	label: string;
	percent: number;
	amount: number;
	color?: string;
}

const allocations: IAllocation[] = [
	{
		label: "Необходимое",
		percent: 40,
		amount: 2880,
		color: "bg-green-500",
	},
	{
		label: "Сбережения",
		percent: 20,
		amount: 1440,
		color: "bg-yellow-500",
	},
	{
		label: "Инвестиции",
		percent: 30,
		amount: 2222,
	},
	{
		label: "Оставшиеся",
		percent: 100,
		amount: 2880,
		color: "bg-slate-500",
	},
];

const AllocationList = () => {
	return (
		<div className="bg-slate-800 rounded-2xl p-6 shadow-md">
			<div className="flex items-center gap-3 mb-4">
				<FaChartPie className="text-purple-400" size={20} />
				<h2 className="text-lg font-semibold">Распределение</h2>
			</div>

			<div className="space-y-4">
				{allocations.map(({ label, percent, amount, color }) => (
					<ProgressBar
						key={label}
						label={label}
						percent={percent}
						amount={amount}
						color={color}
					/>
				))}
			</div>
		</div>
	);
};

export default AllocationList;
