import { FaChartPie } from "react-icons/fa";
import { useGetAllocationsQuery } from "@src/entities/allocation/services/allocation.api";
import { useState } from "react";
import ViewModeToggleButton from "@widgets/allocation/ui/view/ViewModeToggleButton";
import AllocationViewMode from "@src/widgets/allocation/ui/view/AllocationViewMode";
import CreateAllocation from "@features/allocation/ui/CreateAllocation";
import DashboardWidgetWrapper from "@src/shared/ui/DashboardWidgetWrapper";
import AllocationSkeleton from "./ui/AllocationSkeleton";
import { useTranslation } from "react-i18next";

const AllocationWidget = () => {
	const { t } = useTranslation();
	const [isChartOpen, setIsChartOpen] = useState(false);
	const { data, isLoading } = useGetAllocationsQuery();

	if (isLoading) return <AllocationSkeleton />;

	return (
		<DashboardWidgetWrapper
			title={t("allocation.title")}
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
				<AllocationViewMode
					allocations={data.allocations}
					isChartOpen={isChartOpen}
				/>
			)}

			<CreateAllocation />
		</DashboardWidgetWrapper>
	);
};

export default AllocationWidget;
