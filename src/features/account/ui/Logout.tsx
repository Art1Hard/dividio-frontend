import { useThunks } from "@src/shared/lib/hooks/redux/thunks";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import ActionButton from "@src/shared/ui/buttons/ActionButton";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";
import { useTranslation } from "react-i18next";

const Logout = () => {
	const { t } = useTranslation();
	const { logout } = useThunks();

	const { isDialogOpen, openDialog, closeDialog, confirmAction } =
		useConfirmDialog(logout);

	return (
		<>
			<ActionButton
				onClick={openDialog}
				className="text-white font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg w-full text-sm @xs:text-base">
				{t("account.logout")}
			</ActionButton>

			<ConfirmDialog
				title={t("account.logout")}
				children={t("account.logoutConfirm")}
				isOpen={isDialogOpen}
				onClose={closeDialog}
				onConfirm={confirmAction}
			/>
		</>
	);
};

export default Logout;
