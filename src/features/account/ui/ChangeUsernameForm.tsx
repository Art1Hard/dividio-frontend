import Input from "../../../shared/ui/form/Input";
import useChangeUsername from "@src/features/account/lib/useChangeUsername";
import { BaseButton, CancelButton } from "@src/shared/ui/buttons";
import { useTranslation } from "react-i18next";

interface ChangeUsernameFormProps {
	username: string | undefined;
	disableEditMode: () => void;
}

const ChangeUsernameForm = ({
	username,
	disableEditMode,
}: ChangeUsernameFormProps) => {
	const { t } = useTranslation();
	const { register, submit, errors, isSubmitting } = useChangeUsername(
		username,
		disableEditMode
	);

	return (
		<form onSubmit={submit} className="relative flex items-center gap-2 mb-8">
			<Input
				{...register("name")}
				type="text"
				placeholder={t("account.name.placeholder")}
			/>

			{errors.name && errors.name.message && (
				<p className="absolute bottom-[-25px] left-0 text-[14px] text-red-500">
					{errors.name.message}
				</p>
			)}

			<BaseButton type="submit" disabled={isSubmitting}>
				{isSubmitting ? t("account.name.saving") : t("account.name.save")}
			</BaseButton>

			<CancelButton onClick={disableEditMode} />
		</form>
	);
};

export default ChangeUsernameForm;
