import type { IAllocation } from "../../allocation.types";
import { useGetAllocationsQuery } from "../../services/allocation.api";

const useGetChartData = () => {
	const { data } = useGetAllocationsQuery();
	if (!data) return;

	const { freePercentage, freeAmount, allocations } = data;

	const chartData: IAllocation[] = [...allocations];

	if (freePercentage > 0) {
		chartData.push({
			id: "free",
			title: "Свободно",
			amount: freeAmount,
			percentage: freePercentage,
			color: "gray",
		});
	}
	return chartData;
};

export default useGetChartData;
