import DeleteButton from "@src/components/ui/buttons/DeleteButton";
import EditButton from "@src/components/ui/buttons/EditButton";
import Modal from "@src/components/ui/Modal";
import type { IIncome, IIncomeData } from "@src/features/income/income.types";
import { setRusFormatValue } from "@src/lib/utils/formatValue";
import { useDeleteIncomeMutation } from "@src/features/income/api/income.api";
import EditIncomeForm from "./EditIncomeForm";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import deleteItem from "@src/lib/utils/deleteItem";

const IncomeItem = ({ source }: { source: IIncome }) => {
	const { title, amount } = source;
	const [deleteIncome] = useDeleteIncomeMutation();
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div className="flex items-center justify-between bg-slate-300/50 dark:bg-slate-700/50 px-4 py-3 rounded-lg shadow-sm">
			<div>
				<p className="font-medium mb-2">{title}</p>
				<p className="text-xl font-bold">{setRusFormatValue(amount)} ₽</p>
			</div>
			<div className="flex gap-4">
				<EditButton onClick={() => setIsOpenModal(true)} />

				<DeleteButton
					onClick={() =>
						deleteItem<IIncomeData>(
							() => deleteIncome(source.id).unwrap(),
							source.title
						)
					}
				/>
			</div>

			<AnimatePresence>
				{isOpenModal && (
					<Modal onClose={() => setIsOpenModal(false)}>
						<EditIncomeForm
							onClose={() => setIsOpenModal(false)}
							income={source}
						/>
					</Modal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default IncomeItem;
