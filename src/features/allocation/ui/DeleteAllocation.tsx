import { useDeleteAllocationMutation } from "@src/entities/allocation/services/allocation.api";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import DeleteButton from "@src/shared/ui/buttons/DeleteButton";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";
import { toast } from "sonner";

const DeleteAllocation = ({ id }: { id: string }) => {
	const [deleteAllocation] = useDeleteAllocationMutation();
	const { isDialogOpen, openDialog, closeDialog, confirmAction } =
		useConfirmDialog(() => {
			toast.promise(deleteAllocation(id).unwrap(), {
				loading: "Удаление распределения...",
				success: "Распределение удалено успешно",
				error: "Ошибка при удалении распределения",
			});
		});

	return (
		<>
			<DeleteButton onClick={openDialog} />
			<ConfirmDialog
				title="Подтвердите действие"
				isOpen={isDialogOpen}
				onClose={closeDialog}
				onConfirm={confirmAction}>
				Вы уверены, что хотите удалить это распределение? <br /> Это действие
				нельзя будет отменить.
			</ConfirmDialog>
		</>
	);
};

export default DeleteAllocation;
