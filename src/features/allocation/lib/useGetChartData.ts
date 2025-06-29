import type { IAllocation } from "../../../entities/allocation/model/allocation.types";
import { useGetAllocationsQuery } from "../../../entities/allocation/services/allocation.api";

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
