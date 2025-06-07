import { FaChartPie } from "react-icons/fa";
import ProgressBar from "@components/dashboard/ui/ProgressBar";
import { useGetAllocationsQuery } from "@src/store/allocation/allocation.api";

const AllocationList = () => {
	const { data, isLoading } = useGetAllocationsQuery();

	if (isLoading) return <p>Загрузка...</p>;

	return (
		<div className="bg-slate-800 rounded-2xl p-6 shadow-md">
			<div className="flex items-center gap-3 mb-4">
				<FaChartPie className="text-purple-400" size={20} />
				<h2 className="text-lg font-semibold">Распределение</h2>
			</div>

			<div className="space-y-4">
				{data && (
					<>
						{data.allocations.map(({ id, title, percentage, amount }) => (
							<ProgressBar
								key={id}
								label={title}
								percent={percentage}
								amount={amount}
							/>
						))}

						<ProgressBar
							label="Остаток"
							percent={data.freePercentage}
							amount={data.freeAmount}
							color="bg-emerald-400/60"
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default AllocationList;
