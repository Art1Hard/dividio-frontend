import AllocationWidget from "@src/widgets/allocation";
import IncomeWidget from "@widgets/income";
import StatisticWidget from "@widgets/statistic";
import DashboardWrapper from "./ui/DashboardWrapper";

const DashboardPage = () => {
	return (
		<DashboardWrapper>
			<StatisticWidget />
			<IncomeWidget />
			<AllocationWidget />
		</DashboardWrapper>
	);
};

export default DashboardPage;
