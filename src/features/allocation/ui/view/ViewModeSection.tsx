import type { IAllocation } from "../../model/allocation.types";
import AllocationChart from "../AllocationChart";
import AllocationList from "../AllocationList";

interface ViewModeSectionProps {
	allocations: IAllocation[];
	isChartOpen: boolean;
}

const ViewModeSection = ({
	allocations,
	isChartOpen,
}: ViewModeSectionProps) => {
	return (
		<div className="space-y-4 mb-6">
			{!isChartOpen ? (
				<AllocationList allocations={allocations} />
			) : (
				<AllocationChart />
			)}
		</div>
	);
};

export default ViewModeSection;
