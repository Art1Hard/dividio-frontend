import { useDeleteAllocationMutation } from "@src/entities/allocation/services/allocation.api";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import DeleteButton from "@src/shared/ui/buttons/logical/DeleteButton";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const DeleteAllocation = ({ id }: { id: string }) => {
	const { t } = useTranslation();
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
				title={t("allocation.features.delete.title")}
				isOpen={isDialogOpen}
				onClose={closeDialog}
				onConfirm={confirmAction}>
				{t("allocation.features.delete.content")}
			</ConfirmDialog>
		</>
	);
};

export default DeleteAllocation;
