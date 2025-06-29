import { defaultScale } from "@src/shared/animations";
import { AnimatePresence, motion } from "framer-motion";
import IncomeItem from "./IncomeItem";
import type { IIncome } from "@src/entities/income/model/income.types";

const IncomeList = ({ data }: { data: IIncome[] }) => {
	if (data.length < 1)
		return (
			<p className="text-slate-700 dark:text-slate-400 mb-2">
				Пока нет ни одного источника дохода
			</p>
		);

	return (
		<div className="space-y-4">
			<AnimatePresence>
				{data.map((income) => (
					<motion.div
						layout
						key={income.id}
						variants={defaultScale}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.2 }}>
						<IncomeItem key={income.id} item={income} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default IncomeList;
