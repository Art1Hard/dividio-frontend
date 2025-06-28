import EditButton from "@src/shared/ui/buttons/EditButton";
import Modal from "@src/shared/ui/modal/Modal";
import type { IIncome } from "@src/entities/income/model/income.types";
import { setRusFormatValue } from "@src/shared/lib/utils/formatValue";
import EditIncome from "../../../features/income/ui/EditIncome";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DeleteIncome from "@src/features/income/ui/DeleteIncome";

const IncomeItem = ({ source }: { source: IIncome }) => {
	const { id, title, amount } = source;
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div className="flex items-center justify-between bg-slate-300/50 dark:bg-slate-700/50 px-4 py-3 rounded-lg shadow-sm">
			<div>
				<p className="font-medium mb-2">{title}</p>
				<p className="text-xl font-bold">{setRusFormatValue(amount)} ₽</p>
			</div>
			<div className="flex gap-4">
				<EditButton onClick={() => setIsOpenModal(true)} />

				<DeleteIncome id={id} />
			</div>

			<AnimatePresence>
				{isOpenModal && (
					<Modal onClose={() => setIsOpenModal(false)}>
						<EditIncome onClose={() => setIsOpenModal(false)} income={source} />
					</Modal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default IncomeItem;
