import { AnimatePresence, motion } from "framer-motion";
import type { IAllocation } from "../model/allocation.types";
import { defaultScale } from "@src/shared/animations";
import AllocationItem from "./AllocationItem";

interface AllocationListProps {
	allocations: IAllocation[];
}

const AllocationList = ({ allocations }: AllocationListProps) => {
	return (
		<AnimatePresence>
			{allocations.map((allocation) => (
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
