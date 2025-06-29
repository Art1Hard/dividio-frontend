import { FaChartPie } from "react-icons/fa";
import { useGetAllocationsQuery } from "@src/entities/allocation/services/allocation.api";
import { useState } from "react";
import ViewModeToggleButton from "@widgets/allocation/ui/view/ViewModeToggleButton";
import AllocationViewMode from "@src/widgets/allocation/ui/view/AllocationViewMode";
import CreateAllocation from "@features/allocation/ui/CreateAllocation";
import DashboardWidgetWrapper from "@src/shared/ui/DashboardWidgetWrapper";

const AllocationWidget = () => {
	const [isChartOpen, setIsChartOpen] = useState(false);
	const { data, isLoading } = useGetAllocationsQuery();

	if (isLoading) return <p>Загрузка...</p>;

	if (!data) return null;

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
			<AllocationViewMode
				allocations={data.allocations}
				isChartOpen={isChartOpen}
			/>

			<CreateAllocation />
		</DashboardWidgetWrapper>
	);
};

export default AllocationWidget;
