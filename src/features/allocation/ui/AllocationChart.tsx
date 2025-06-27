import { tailwindColorMap } from "@src/lib/config/colors";
import type { IAllocation } from "@src/features/allocation/model/allocation.types";
import { setRusFormatValue } from "@src/lib/utils/formatValue";
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	ResponsiveContainer,
	type TooltipProps,
} from "recharts";
import useGetChartData from "../lib/useGetChartData";

const AllocationChart = () => {
	const chartData = useGetChartData();

	if (!chartData) return null;

	return (
		<div className="h-[300px] w-full">
			<ResponsiveContainer>
				<PieChart>
					<Pie
						className="font-medium"
						animationBegin={0}
						animationDuration={600}
						stroke="#fff"
						data={chartData}
						cx="50%"
						cy="50%"
						dataKey="percentage"
						label={(allocation: IAllocation) => allocation.title}>
						{chartData.map((allocation) => (
							<Cell
								key={allocation.id}
								fill={tailwindColorMap[allocation.color]}
							/>
						))}
					</Pie>
					<Tooltip content={<CustomTooltip />} />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

const CustomTooltip = ({
	active,
	payload,
}: TooltipProps<IAllocation["amount"], IAllocation["title"]>) => {
	if (!active || !payload?.length) return null;
	const amount = setRusFormatValue(payload[0].payload.amount);

	return (
		<p className="bg-slate-100 dark:bg-slate-700 px-4 py-3 rounded-lg shadow-md text-sm">
			{payload[0].payload.title}: {amount} ₽
		</p>
	);
};

export default AllocationChart;
