import AllocationList from "@src/components/dashboard/allocation/AllocationList";
import { useGetUserQuery } from "@src/store/user/user.api";
import IncomeSource from "../components/dashboard/income/IncomeSource";
import StatisticSection from "@src/components/dashboard/statistic/StatisticSection";

const DashboardPage = () => {
	const { data: user, isLoading: isUserLoading } = useGetUserQuery();

	return (
		<div className="min-h-full flex items-center text-white py-12 px-6">
			<div className="max-w-6xl w-full mx-auto space-y-10">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-2">
						{isUserLoading
							? "Загрузка..."
							: `Добро пожаловать${user && user.name && ` ${user.name}`}!`}
					</h1>
					<p className="text-slate-400">Ваш финансовый обзор на сегодня</p>
				</div>

				<div className="space-y-8">
					<StatisticSection />
					<IncomeSource />

					<AllocationList />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
