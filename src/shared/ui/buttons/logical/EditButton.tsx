import { useTranslation } from "react-i18next";
import { FiEdit2 } from "react-icons/fi";
import GlassButton, { type GlassButtonProps } from "../GlassButton";

const EditButton = ({ ...props }: GlassButtonProps) => {
	const { t } = useTranslation();

	return (
		<GlassButton title={t("buttons.edit")} {...props}>
			<FiEdit2 size={16} />
		</GlassButton>
	);
};

export default EditButton;
