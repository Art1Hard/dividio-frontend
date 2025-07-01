import { useDeleteIncomeMutation } from "@src/entities/income/services/income.api";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import { isServerError } from "@src/shared/lib/utils/serverError";
import DeleteButton from "@src/shared/ui/buttons/DeleteButton";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

interface DeleteIncomeProps {
	id: string;
}

const DeleteIncome = ({ id }: DeleteIncomeProps) => {
	const { t } = useTranslation();
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
				title={t("income.features.delete.title")}
				isOpen={isDialogOpen}
				onClose={closeDialog}
				onConfirm={confirmAction}>
				{t("income.features.delete.content")}
			</ConfirmDialog>
		</>
	);
};

export default DeleteIncome;
