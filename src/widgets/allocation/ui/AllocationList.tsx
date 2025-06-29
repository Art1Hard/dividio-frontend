import { AnimatePresence, motion } from "framer-motion";
import type { IAllocation } from "../../../entities/allocation/model/allocation.types";
import { defaultScale } from "@src/shared/animations";
import AllocationItem from "./AllocationItem";

interface AllocationListProps {
	data: IAllocation[];
}

const AllocationList = ({ data }: AllocationListProps) => {
	if (data.length < 1)
		return (
			<p className="text-slate-700 dark:text-slate-400 mb-2">
				Пока нет ни одного распределения
			</p>
		);

	return (
		<AnimatePresence>
			{data.map((allocation) => (
				<motion.div
					layout
					key={allocation.id}
					variants={defaultScale}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.2 }}>
					<AllocationItem item={allocation} />
				</motion.div>
			))}
		</AnimatePresence>
	);
};

export default AllocationList;
