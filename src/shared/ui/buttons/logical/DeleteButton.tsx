import { useTranslation } from "react-i18next";
import { FiTrash2 } from "react-icons/fi";
import GlassButton, { type GlassButtonProps } from "../GlassButton";

const DeleteButton = ({ ...props }: GlassButtonProps) => {
	const { t } = useTranslation();

	return (
		<GlassButton color="red" title={t("buttons.delete")} {...props}>
			<FiTrash2 size={16} />
		</GlassButton>
	);
};

export default DeleteButton;
