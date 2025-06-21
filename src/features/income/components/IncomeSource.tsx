import { FiPlusCircle } from "react-icons/fi";
import IncomeItem from "@src/features/income/components/IncomeItem";
import { useGetIncomesQuery } from "@src/features/income/api/income.api";
import { useState } from "react";
import Modal from "@src/components/ui/Modal";
import CreateIncomeForm from "@src/features/income/components/CreateIncomeForm";
import { AiFillGold } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { defaultScale } from "@src/lib/animations";
import ActionButton from "@src/components/ui/buttons/ActionButton";

const IncomeSource = () => {
	const { data: incomeData } = useGetIncomesQuery();
	const [isAddOpen, setIsAddOpen] = useState(false);

	const handleAddIncome = () => setIsAddOpen(true);

	return (
		<div className="h-full flex flex-col justify-center">
			<div className="bg-slate-200 dark:bg-slate-800 rounded-lg shadow-md p-6">
				<div className="flex justify-between items-center mb-4">
					<div className="flex items-center gap-2">
						<AiFillGold
							className="text-amber-500 dark:text-yellow-400"
							size={24}
						/>
						<h1 className="text-lg font-semibold">Источники</h1>
					</div>
					<ActionButton
						onClick={handleAddIncome}
						className="flex items-center gap-2">
						<FiPlusCircle size={18} />
						Добавить
					</ActionButton>
				</div>

				{!incomeData || incomeData.incomes.length === 0 ? (
					<div className="text-center text-slate-700 dark:text-slate-400">
						<p className="mb-2">Пока нет источников дохода</p>
						<button
							onClick={handleAddIncome}
							className="text-blue-400 hover:underline">
							Добавить первый источник
						</button>
					</div>
				) : (
					<div className="space-y-4">
						<AnimatePresence>
							{incomeData.incomes.map((income) => (
								<motion.div
									layout
									key={income.id}
									variants={defaultScale}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{ duration: 0.2 }}>
									<IncomeItem key={income.id} source={income} />
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				)}

				<AnimatePresence>
					{isAddOpen && (
						<Modal onClose={() => setIsAddOpen(false)}>
							<CreateIncomeForm onClose={() => setIsAddOpen(false)} />
						</Modal>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default IncomeSource;
