import { FaChartPie } from "react-icons/fa";
import { useGetAllocationsQuery } from "@src/features/allocation/services/allocation.api";
import { useState } from "react";
import ViewModeToggleButton from "./view/ViewModeToggleButton";
import ViewModeSection from "./view/ViewModeSection";
import CreateAllocation from "./CreateAllocation";
import DashboardWidgetWrapper from "@src/shared/ui/DashboardWidgetWrapper";

const AllocationSection = () => {
	const [isChartOpen, setIsChartOpen] = useState(false);
	const { data, isLoading } = useGetAllocationsQuery();

	if (isLoading) return <p>Загрузка...</p>;

	return (
		<DashboardWidgetWrapper
			title="Распределение"
			icon={
				<FaChartPie
					className="text-purple-500 dark:text-purple-400"
					size={20}
				/>
			}
			headerButton={
				<ViewModeToggleButton
					data={data}
					isChart={isChartOpen}
					onClick={() => setIsChartOpen((prev) => !prev)}
				/>
			}>
			{data && (
				<ViewModeSection
					allocations={data.allocations}
					isChartOpen={isChartOpen}
				/>
			)}

			<CreateAllocation />
		</DashboardWidgetWrapper>
	);
};

export default AllocationSection;
