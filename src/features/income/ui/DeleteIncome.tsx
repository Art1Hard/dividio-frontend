import { useDeleteIncomeMutation } from "@src/entities/income/services/income.api";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import { isServerError } from "@src/shared/lib/utils/serverError";
import DeleteButton from "@src/shared/ui/buttons/DeleteButton";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";
import { toast } from "sonner";

interface DeleteIncomeProps {
	id: string;
}

const DeleteIncome = ({ id }: DeleteIncomeProps) => {
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

	return (
		<>
			<DeleteButton onClick={openDialog} />
			<ConfirmDialog
				title="Подтвердите действие"
				isOpen={isDialogOpen}
				onClose={closeDialog}
				onConfirm={confirmAction}>
				Вы уверены, что хотите удалить этот источник дохода? <br /> Это действие
				нельзя будет отменить.
			</ConfirmDialog>
		</>
	);
};

export default DeleteIncome;
