import { useState } from "react";

const useConfirmDialog = (action: () => void) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openDialog = () => setIsDialogOpen(true);
	const closeDialog = () => setIsDialogOpen(false);

	const confirmAction = () => {
		action();
		closeDialog();
	};

	return { isDialogOpen, openDialog, closeDialog, confirmAction };
};

export default useConfirmDialog;
