import { tailwindColorMap } from "@src/lib/config/colors";
import type { IAllocation } from "@src/features/allocation/allocation.types";
import { setRusFormatValue } from "@src/lib/utils/formatValue";
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	ResponsiveContainer,
	type TooltipProps,
} from "recharts";
import { useGetAllocationsQuery } from "../api/allocation.api";

const AllocationChart = () => {
	const { data } = useGetAllocationsQuery();

	if (!data) return null;

	const { freePercentage, freeAmount, allocations } = data;

	const chartData: IAllocation[] = [...allocations];

	if (freePercentage > 0) {
		chartData.push({
			id: "free",
			title: "Свободно",
			amount: freeAmount,
			percentage: freePercentage,
			color: "gray", // Tailwind-карта: tailwindColorMap.gray
		});
	}

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
