import AllocationList from "@src/components/dashboard/allocation/AllocationList";
import StatisticCard from "@src/components/dashboard/StatisticCard";
import { ROUTES } from "@src/routes";
import { useGetAllocationsQuery } from "@src/store/allocation/allocation.api";
import { useGetIncomesQuery } from "@src/store/income/income.api";
import { useGetUserQuery } from "@src/store/user/user.api";
import { FaBoxes, FaDove } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardPage = () => {
	const { data: user, isLoading: isUserLoading } = useGetUserQuery();

	const { data: incomeData, isLoading: isIncomeDataLoading } =
		useGetIncomesQuery();

	const { data: allocationData, isLoading: isAllocationLoading } =
		useGetAllocationsQuery();

	if (isUserLoading || isIncomeDataLoading || isAllocationLoading)
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
					{incomeData && allocationData && (
						<div className="flex gap-4 justify-between mb-8">
							<Link className="flex-1" to={ROUTES.INCOME}>
								<StatisticCard value={incomeData.totalAmount} />
							</Link>

							<Link className="flex-1" to={ROUTES.INCOME}>
								<StatisticCard
									title="Источников дохода"
									postfix=" шт."
									value={incomeData.incomes.length}
									icon={{
										IconComponent: FaBoxes,
										bgColor: "bg-orange-600",
									}}
								/>
							</Link>

							<StatisticCard
								title="Нераспределено"
								postfix="%"
								value={allocationData.freePercentage}
								icon={{ IconComponent: FaDove, bgColor: "bg-emerald-500" }}
							/>
						</div>
					)}

					<AllocationList />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
