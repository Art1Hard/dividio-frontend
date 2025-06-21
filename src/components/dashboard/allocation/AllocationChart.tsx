import { tailwindColorMap } from "@src/lib/data/colors";
import type { IAllocation } from "@src/lib/types/types";
import { setRusFormatValue } from "@src/lib/utils/formatValue";
import { memo } from "react";
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	ResponsiveContainer,
	type TooltipProps,
} from "recharts";

interface AllocationChartProps {
	data: IAllocation[];
}

const AllocationChart = ({ data }: AllocationChartProps) => (
	<div className="h-[300px] w-full">
		<ResponsiveContainer>
			<PieChart>
				<Pie
					animationBegin={0}
					animationDuration={600}
					stroke="#fff"
					data={data}
					cx="50%"
					cy="50%"
					dataKey="percentage"
					label={(allocation: IAllocation) => allocation.title}>
					{data.map((allocation) => (
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

const CustomTooltip = ({
	active,
	payload,
}: TooltipProps<IAllocation["amount"], IAllocation["title"]>) => {
	if (!active || !payload?.length) return null;
	const amount = setRusFormatValue(payload[0].payload.amount);

	return (
		<p className="bg-slate-400 dark:bg-slate-700 px-4 py-3 rounded-lg shadow-md text-sm">
			{payload[0].payload.title}: {amount} ₽
		</p>
	);
};

export default memo(AllocationChart);
