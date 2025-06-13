import { FiPlusCircle } from "react-icons/fi";
import IncomeItem from "@src/components/dashboard/income/IncomeItem";
import { useGetIncomesQuery } from "@src/store/income/income.api";
import { useState } from "react";
import Modal from "@src/components/ui/Modal";

const IncomeSourcePage = () => {
	const { data: incomeData } = useGetIncomesQuery();
	const [isAddOpen, setIsAddOpen] = useState(false);

	const handleAddIncome = () => setIsAddOpen(true);

	return (
		<div className="max-w-2xl mx-auto px-4 py-8 text-white h-full flex flex-col justify-center">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Источники доходов</h1>
				<button
					onClick={handleAddIncome}
					className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
					<FiPlusCircle size={18} />
					<span>Добавить</span>
				</button>
			</div>

			{!incomeData || incomeData.incomes.length === 0 ? (
				<div className="text-center text-slate-400">
					<p className="mb-2">Пока нет источников дохода</p>
					<button
						onClick={handleAddIncome}
						className="text-blue-400 hover:underline">
						Добавить первый источник
					</button>
				</div>
			) : (
				<div className="space-y-4">
					{incomeData.incomes.map((income) => (
						<IncomeItem key={income.id} source={income} />
					))}
				</div>
			)}

			{isAddOpen && (
				<Modal onClose={() => setIsAddOpen(false)}>
					<h1>Модалка</h1>
				</Modal>
			)}
		</div>
	);
};

export default IncomeSourcePage;
