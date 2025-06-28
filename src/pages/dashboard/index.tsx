import AllocationSection from "@src/features/allocation/ui/AllocationSection";
import IncomeWidget from "@widgets/income";
import StatisticWidget from "@widgets/statistic";
import DashboardWrapper from "./ui/DashboardWrapper";

const DashboardPage = () => {
	return (
		<DashboardWrapper>
			<StatisticWidget />
			<IncomeWidget />
			<AllocationSection />
		</DashboardWrapper>
	);
};

export default DashboardPage;
