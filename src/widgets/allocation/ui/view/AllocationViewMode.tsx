import type { IAllocation } from "@src/entities/allocation/model/allocation.types";
import AllocationChart from "@features/allocation/ui/AllocationChart";
import AllocationList from "@widgets/allocation/ui/AllocationList";

interface AllocationViewModeProps {
	allocations: IAllocation[];
	isChartOpen: boolean;
}

const AllocationViewMode = ({
	allocations,
	isChartOpen,
}: AllocationViewModeProps) => {
	return (
		<div className="space-y-4 mb-6">
			{!isChartOpen ? (
				<AllocationList data={allocations} />
			) : (
				<AllocationChart />
			)}
		</div>
	);
};

export default AllocationViewMode;
