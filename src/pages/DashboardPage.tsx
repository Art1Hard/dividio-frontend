import AllocationList from "@src/components/dashboard/allocation/AllocationList";
import TotalIncome from "@src/components/dashboard/TotalIncome";

const DashboardPage = () => {
	return (
		<div className="min-h-full flex items-center bg-slate-900 text-white py-12 px-6">
			<div className="max-w-6xl w-full mx-auto space-y-10">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-2">Добро пожаловать!</h1>
					<p className="text-slate-400">Ваш финансовый обзор на сегодня</p>
				</div>

				<div>
					<div className="flex gap-4 justify-between mb-8">
						<TotalIncome value="7,200" />
						<TotalIncome value="7,200" />
						<TotalIncome value="7,200" />
					</div>

					<AllocationList />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
