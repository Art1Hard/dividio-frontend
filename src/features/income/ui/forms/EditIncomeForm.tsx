import ActionButton from "@src/shared/ui/buttons/ActionButton";
import Input from "@src/shared/ui/form/Input";
import useEditIncome from "@src/features/income/lib/useEditIncome";
import type { IIncome } from "@src/entities/income/model/income.types";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

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
			<form onSubmit={submit} className="space-y-8">
				<Input
					type="text"
					label="title"
					labelText={t("income.features.edit.name.value")}
					placeholder={t("income.features.edit.name.placeholder")}
					error={errors.title}
					{...register("title")}
				/>

				<Input
					type="text"
					label="amount"
					labelText={t("income.features.edit.amount.value")}
					placeholder={t("income.features.edit.amount.placeholder")}
					error={errors.amount}
					{...register("amount", { valueAsNumber: true })}
				/>

				<div className="flex justify-between gap-3">
					<ActionButton color="secondary" onClick={onClose} className="w-1/2">
						{t("income.features.edit.cancel")}
					</ActionButton>
					<ActionButton
						type="submit"
						disabled={!isDirty || isSubmitting}
						className="w-1/2">
						{isSubmitting
							? t("income.features.edit.saving")
							: t("income.features.edit.save")}
					</ActionButton>
				</div>
			</form>
		</div>
	);
};

export default EditIncomeForm;
