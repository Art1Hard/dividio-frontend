import useCreateIncome from "@src/features/income/lib/useCreateIncome";
import Input from "@src/shared/ui/form/Input";
import type { FC } from "react";
import { BaseButton, CancelButton } from "@src/shared/ui/buttons";
import { useTranslation } from "react-i18next";

interface CreateIncomeProps {
	onClose: () => void;
}

const CreateIncome: FC<CreateIncomeProps> = ({ onClose }) => {
	const { t } = useTranslation();
	const { register, submit, isSubmitting, isDirty, errors } =
		useCreateIncome(onClose);

	return (
		<form onSubmit={submit} className="space-y-8">
			<h2 className="text-xl font-semibold text-center">
				{t("income.features.add.title")}
			</h2>

			<Input
				type="text"
				label="title"
				labelText={t("income.features.add.name.value")}
				placeholder={t("income.features.add.name.placeholder")}
				error={errors.title}
				{...register("title")}
			/>

			<Input
				type="text"
				label="amount"
				labelText={t("income.features.add.amount.value")}
				placeholder={t("income.features.add.amount.placeholder")}
				error={errors.amount}
				{...register("amount", { valueAsNumber: true })}
			/>

			<div className="flex justify-between gap-3">
				<CancelButton onClick={onClose} className="w-1/2" />
				<BaseButton
					type="submit"
					disabled={!isDirty || isSubmitting}
					className="w-1/2">
					{isSubmitting
						? t("income.features.add.creating")
						: t("income.features.add.create")}
				</BaseButton>
			</div>
		</form>
	);
};

export default CreateIncome;
