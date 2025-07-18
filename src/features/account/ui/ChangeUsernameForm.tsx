import useChangeUsername from "@src/features/account/lib/useChangeUsername";
import { BaseButton, CancelButton } from "@src/shared/ui/buttons";
import { InputGroup, Input } from "@src/shared/ui/form/input";
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
	const { register, submit, errors, isSubmitting, isDirty } = useChangeUsername(
		username,
		disableEditMode
	);

	return (
		<form onSubmit={submit} className="relative flex items-center gap-2 mb-8">
			<InputGroup error={errors.name}>
				<Input
					placeholder={t("account.name.placeholder")}
					{...register("name")}
				/>
			</InputGroup>

			{errors.name && errors.name.message && (
				<p className="absolute bottom-[-25px] left-0 text-[14px] text-red-500">
					{errors.name.message}
				</p>
			)}

			<BaseButton type="submit" disabled={isSubmitting || !isDirty}>
				{isSubmitting ? t("account.name.saving") : t("account.name.save")}
			</BaseButton>

			<CancelButton onClick={disableEditMode} />
		</form>
	);
};

export default ChangeUsernameForm;
