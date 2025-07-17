import { BaseButton, CancelButton } from "@src/shared/ui/buttons";
import useEditIncome from "@src/features/income/lib/useEditIncome";
import type { IIncome } from "@src/entities/income/model/income.types";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import {
	Input,
	InputError,
	InputGroup,
	InputLabel,
} from "@src/shared/ui/form/input";

interface IEditIncomeFormProps {
	onClose: () => void;
	income: IIncome;
}

const EditIncomeForm: FC<IEditIncomeFormProps> = ({ onClose, income }) => {
	const { t } = useTranslation();
	const { register, submit, isSubmitting, isDirty, errors } = useEditIncome(
		onClose,
		income.id,
		income
	);

	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold mb-4 text-center text-balance">
				{t("income.features.edit.title")} "{income.title}"
			</h2>
			<form onSubmit={submit} className="space-y-6">
				<InputGroup error={errors.title}>
					<InputLabel>{t("income.features.edit.name.value")}</InputLabel>
					<Input
						placeholder={t("income.features.edit.name.placeholder")}
						{...register("title")}
					/>
					<InputError />
				</InputGroup>

				<InputGroup error={errors.amount}>
					<InputLabel>{t("income.features.edit.amount.value")}</InputLabel>
					<Input
						placeholder={t("income.features.edit.amount.placeholder")}
						{...register("amount", { valueAsNumber: true })}
					/>
					<InputError />
				</InputGroup>

				<div className="flex justify-between gap-3">
					<CancelButton onClick={onClose} className="w-1/2" />
					<BaseButton
						type="submit"
						disabled={!isDirty || isSubmitting}
						className="w-1/2">
						{isSubmitting
							? t("income.features.edit.saving")
							: t("income.features.edit.save")}
					</BaseButton>
				</div>
			</form>
		</div>
	);
};

export default EditIncomeForm;
