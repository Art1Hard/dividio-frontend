import { FiPlusCircle } from "react-icons/fi";
import IncomeItem from "@features/income/components/IncomeItem";
import { useGetIncomesQuery } from "@src/features/income/services/income.api";
import { useState } from "react";
import Modal from "@components/ui/modal/Modal";
import CreateIncomeForm from "@src/features/income/components/forms/CreateIncomeForm";
import { AiFillGold } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { defaultScale } from "@lib/animations";
import ActionButton from "@components/ui/buttons/ActionButton";
import DashboardSection from "@src/components/DashboardSection";

const IncomeSection = () => {
	const { data: incomeData } = useGetIncomesQuery();
	const [isAddOpen, setIsAddOpen] = useState(false);

	const handleAddIncome = () => setIsAddOpen(true);

	return (
		<DashboardSection
			title="Источники"
			icon={
				<AiFillGold className="text-amber-500 dark:text-yellow-400" size={24} />
			}
			headerButton={
				<ActionButton
					onClick={handleAddIncome}
					className="flex items-center gap-2">
					<FiPlusCircle size={18} />
					Добавить
				</ActionButton>
			}>
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
		</DashboardSection>
	);
};

export default IncomeSection;
