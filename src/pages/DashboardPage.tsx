import AllocationList from "@src/components/dashboard/allocation/AllocationList";
import TotalIncome from "@src/components/dashboard/TotalIncome";
import { useGetIncomesQuery } from "@src/store/income/income.api";
import { useGetUserQuery } from "@src/store/user/user.api";

const DashboardPage = () => {
	const { data: user, isLoading: isUserLoading } = useGetUserQuery();

	const { data: incomeData, isLoading: isIncomeDataLoading } =
		useGetIncomesQuery();

	if (isUserLoading || isIncomeDataLoading)
		return <p>Загрузка пользователя...</p>;

	return (
		<div className="min-h-full flex items-center text-white py-12 px-6">
			<div className="max-w-6xl w-full mx-auto space-y-10">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-2">
						Добро пожаловать{user && user.name && ` ${user.name}`}!
					</h1>
					<p className="text-slate-400">Ваш финансовый обзор на сегодня</p>
				</div>

				<div>
					{incomeData && (
						<div className="flex gap-4 justify-between mb-8">
							<TotalIncome value={incomeData.totalAmount} />
							<TotalIncome title="Информативное поле" value={0} />
							<TotalIncome title="Информативное поле" value={0} />
						</div>
					)}

					<AllocationList />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
