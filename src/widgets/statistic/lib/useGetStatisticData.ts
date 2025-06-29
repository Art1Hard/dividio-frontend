import type { IStatisticItem } from "@src/widgets/statistic/model/types";
import { useGetAllocationsQuery } from "@src/entities/allocation/services/allocation.api";
import { useGetIncomesQuery } from "@src/entities/income/services/income.api";
import { useMemo } from "react";
import { FaBoxes, FaCoins, FaDove } from "react-icons/fa";

const useGetStatisticData = () => {
	const { data: incomeData, isLoading: isIncomeDataLoading } =
		useGetIncomesQuery();

	const { data: allocationData, isLoading: isAllocationLoading } =
		useGetAllocationsQuery();

	const statisticData: IStatisticItem[] = useMemo(
		() => [
			{
				title: "Общий доход",
				postfix: " ₽",
				value: incomeData?.totalAmount ?? 0,
				icon: {
					IconComponent: FaCoins,
					bgColor: "bg-blue-600",
				},
			},
			{
				title: "Источников дохода",
				postfix: " шт.",
				value: incomeData?.incomes.length ?? 0,
				icon: {
					IconComponent: FaBoxes,
					bgColor: "bg-orange-600",
				},
			},
			{
				title: "Нераспределено",
				postfix: "%",
				value: allocationData?.freePercentage ?? 0,
				icon: { IconComponent: FaDove, bgColor: "bg-emerald-500" },
			},
		],
		[incomeData, allocationData]
	);

	return {
		isLoading: isIncomeDataLoading || isAllocationLoading,
		statisticData,
	};
};

export default useGetStatisticData;
