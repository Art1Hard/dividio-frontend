import { useTranslation } from "react-i18next";
import BaseButton, { type BaseButtonProps } from "../BaseButton";

const CancelButton = ({ ...props }: BaseButtonProps) => {
	const { t } = useTranslation();

	return (
		<BaseButton type="button" color="secondary" {...props}>
			{t("cancel")}
		</BaseButton>
	);
};

export default CancelButton;
