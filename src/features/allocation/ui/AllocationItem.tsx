import type { IAllocation } from "@src/features/allocation/model/allocation.types";
import { useState, type FC } from "react";
import ProgressBar from "@src/shared/ui/ProgressBar";
import { useDeleteAllocationMutation } from "@src/features/allocation/services/allocation.api";
import DeleteButton from "@src/shared/ui/buttons/DeleteButton";
import EditButton from "@src/shared/ui/buttons/EditButton";
import EditAllocationForm from "./forms/EditAllocationForm";
import Modal from "@src/shared/ui/modal/Modal";
import { AnimatePresence } from "framer-motion";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";
import { toast } from "sonner";

interface AllocationItemProps {
	item: IAllocation;
}

const AllocationItem: FC<AllocationItemProps> = ({ item }) => {
	const { id, title, percentage, amount, color } = item;

	const [deleteAllocation] = useDeleteAllocationMutation();
	const { isDialogOpen, openDialog, closeDialog, confirmAction } =
		useConfirmDialog(() => {
			toast.promise(deleteAllocation(id).unwrap(), {
				loading: "Удаление распределения...",
				success: "Распределение удалено успешно",
				error: "Ошибка при удалении распределения",
			});
		});
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex items-center justify-between gap-4 bg-slate-300/50 dark:bg-slate-700/50 rounded-lg px-4 py-3">
			<div className="flex-1">
				<ProgressBar
					label={title}
					percent={percentage}
					amount={amount}
					color={color}
				/>
			</div>

			<EditButton onClick={() => setIsOpen(true)} />

			<DeleteButton onClick={openDialog} />
			<ConfirmDialog
				title="Подтвердите действие"
				isOpen={isDialogOpen}
				onClose={closeDialog}
				onConfirm={confirmAction}>
				Вы уверены, что хотите удалить это распределение? <br /> Это действие
				нельзя будет отменить.
			</ConfirmDialog>

			<AnimatePresence>
				{isOpen && (
					<Modal onClose={() => setIsOpen(false)}>
						<EditAllocationForm
							defaultValues={item}
							onClose={() => setIsOpen(false)}
						/>
					</Modal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AllocationItem;
