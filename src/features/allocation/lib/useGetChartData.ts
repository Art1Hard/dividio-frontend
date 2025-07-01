import { useTranslation } from "react-i18next";
import type { IAllocation } from "../../../entities/allocation/model/allocation.types";
import { useGetAllocationsQuery } from "../../../entities/allocation/services/allocation.api";

const useGetChartData = () => {
	const { t } = useTranslation();
	const { data } = useGetAllocationsQuery();
	if (!data) return;

	const { freePercentage, freeAmount, allocations } = data;

	const chartData: IAllocation[] = [...allocations];

	if (freePercentage > 0) {
		chartData.push({
			id: "free",
			title: t("allocation.free"),
			amount: freeAmount,
			percentage: freePercentage,
			color: "gray",
		});
	}
	return chartData;
};

export default useGetChartData;
