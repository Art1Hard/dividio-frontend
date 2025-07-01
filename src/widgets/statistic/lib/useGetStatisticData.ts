import type { IStatisticItem } from "@src/widgets/statistic/model/types";
import { useGetAllocationsQuery } from "@src/entities/allocation/services/allocation.api";
import { useGetIncomesQuery } from "@src/entities/income/services/income.api";
import { useMemo } from "react";
import { FaBoxes, FaCoins, FaDove } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const useGetStatisticData = () => {
	const { t } = useTranslation();

	const { data: incomeData, isLoading: isIncomeDataLoading } =
		useGetIncomesQuery();

	const { data: allocationData, isLoading: isAllocationLoading } =
		useGetAllocationsQuery();

	const statisticData: IStatisticItem[] = useMemo(
		() => [
			{
				title: t("statistic.allIncomes.title"),
				postfix: " ₽",
				value: incomeData?.totalAmount ?? 0,
				icon: {
					IconComponent: FaCoins,
					bgColor: "bg-blue-600",
				},
			},
			{
				title: t("statistic.incomesCount.title"),
				postfix: ` ${t("statistic.incomesCount.postfix")}`,
				value: incomeData?.incomes.length ?? 0,
				icon: {
					IconComponent: FaBoxes,
					bgColor: "bg-orange-600",
				},
			},
			{
				title: t("statistic.freeAllocation.title"),
				postfix: "%",
				value: allocationData?.freePercentage ?? 0,
				icon: { IconComponent: FaDove, bgColor: "bg-emerald-500" },
			},
		],
		[incomeData, allocationData, t]
	);

	return {
		isLoading: isIncomeDataLoading || isAllocationLoading,
		statisticData,
	};
};

export default useGetStatisticData;
