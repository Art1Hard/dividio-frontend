import { useThunks } from "@src/shared/lib/hooks/redux/thunks";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import ActionButton from "@src/shared/ui/buttons/ActionButton";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";

const Logout = () => {
	const { logout } = useThunks();

	const { isDialogOpen, openDialog, closeDialog, confirmAction } =
		useConfirmDialog(logout);

	return (
		<>
			<ActionButton
				onClick={openDialog}
				className="text-white font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg w-full text-sm @xs:text-base">
				Выйти из аккаунта
			</ActionButton>

			<ConfirmDialog
				title="Выход с аккаунта"
				children="Вы действительно хотите выйти?"
				isOpen={isDialogOpen}
				onClose={closeDialog}
				onConfirm={confirmAction}
			/>
		</>
	);
};

export default Logout;
