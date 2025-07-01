import { useTranslation } from "react-i18next";
import { FiTrash2 } from "react-icons/fi";

const DeleteButton = ({
	onClick,
}: {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	const { t } = useTranslation();

	return (
		<button
			type="button"
			className="p-2 rounded-md bg-slate-300 hover:bg-red-500 dark:bg-slate-600 dark:hover:bg-red-500 transition-colors "
			onClick={onClick}
			title={t("buttons.delete")}>
			<FiTrash2 size={16} />
		</button>
	);
};

export default DeleteButton;
