import useCreateIncome from "@src/features/income/lib/useCreateIncome";
import type { FC } from "react";
import { BaseButton, CancelButton } from "@src/shared/ui/buttons";
import { useTranslation } from "react-i18next";
import {
	InputError,
	InputGroup,
	InputLabel,
	Input,
} from "@src/shared/ui/form/input";

interface CreateIncomeProps {
	onClose: () => void;
}

const CreateIncome: FC<CreateIncomeProps> = ({ onClose }) => {
	const { t } = useTranslation();
	const { register, submit, isSubmitting, isDirty, errors } =
		useCreateIncome(onClose);

	return (
		<form onSubmit={submit} className="space-y-6">
			<h2 className="text-xl font-semibold text-center">
				{t("income.features.add.title")}
			</h2>

			<InputGroup error={errors.title}>
				<InputLabel>{t("income.features.add.name.value")}</InputLabel>
				<Input
					placeholder={t("income.features.add.name.placeholder")}
					{...register("title")}
				/>
				<InputError />
			</InputGroup>

			<InputGroup error={errors.amount}>
				<InputLabel>{t("income.features.add.amount.value")}</InputLabel>
				<Input
					placeholder={t("income.features.add.amount.placeholder")}
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
						? t("income.features.add.creating")
						: t("income.features.add.create")}
				</BaseButton>
			</div>
		</form>
	);
};

export default CreateIncome;
