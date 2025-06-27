import DeleteButton from "@src/shared/ui/buttons/DeleteButton";
import EditButton from "@src/shared/ui/buttons/EditButton";
import Modal from "@src/shared/ui/modal/Modal";
import type { IIncome } from "@src/features/income/model/income.types";
import { setRusFormatValue } from "@src/shared/lib/utils/formatValue";
import { useDeleteIncomeMutation } from "@src/features/income/services/income.api";
import EditIncomeForm from "./forms/EditIncomeForm";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import { toast } from "sonner";
import { isServerError } from "@src/shared/lib/utils/serverError";

const IncomeItem = ({ source }: { source: IIncome }) => {
	const { id, title, amount } = source;
	const [deleteIncome] = useDeleteIncomeMutation();
	const { isDialogOpen, openDialog, closeDialog, confirmAction } =
		useConfirmDialog(() => {
			toast.promise(deleteIncome(id).unwrap(), {
				loading: "Удаление дохода...",
				success: "Доход удален успешно",
				error: (err) => {
					if (isServerError(err)) return err.data.message;
					return "Не удалось удалить доход. Пожалуйста, попробуйте позже.";
				},
			});
		});
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div className="flex items-center justify-between bg-slate-300/50 dark:bg-slate-700/50 px-4 py-3 rounded-lg shadow-sm">
			<div>
				<p className="font-medium mb-2">{title}</p>
				<p className="text-xl font-bold">{setRusFormatValue(amount)} ₽</p>
			</div>
			<div className="flex gap-4">
				<EditButton onClick={() => setIsOpenModal(true)} />

				<DeleteButton onClick={openDialog} />
				<ConfirmDialog
					title="Подтвердите действие"
					isOpen={isDialogOpen}
					onClose={closeDialog}
					onConfirm={confirmAction}>
					Вы уверены, что хотите удалить этот источник дохода? <br /> Это
					действие нельзя будет отменить.
				</ConfirmDialog>
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
