import ActionButton from "@src/components/ui/buttons/ActionButton";
import Input from "@src/components/ui/Input";
import useEditIncome from "@src/features/income/lib/useEditIncome";
import type { IIncome } from "@src/features/income/model/income.types";
import type { FC } from "react";

interface IEditIncomeFormProps {
	onClose: () => void;
	income: IIncome;
}

const EditIncomeForm: FC<IEditIncomeFormProps> = ({ onClose, income }) => {
	const { register, submit, isSubmitting, isDirty, errors } = useEditIncome(
		onClose,
		income.id,
		income
	);

	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold mb-4 text-center">
				Редактирование дохода <br />"{income.title}"
			</h2>
			<form onSubmit={submit} className="space-y-8">
				<Input
					type="text"
					label="title"
					labelText="Название"
					placeholder="Например: Работа"
					error={errors.title}
					{...register("title")}
				/>

				<Input
					type="text"
					label="amount"
					labelText="Сумма"
					placeholder="Например: 5000"
					error={errors.amount}
					{...register("amount", { valueAsNumber: true })}
				/>

				<div className="flex justify-between gap-3">
					<ActionButton color="secondary" onClick={onClose} className="w-1/2">
						Отмена
					</ActionButton>
					<ActionButton
						type="submit"
						disabled={!isDirty || isSubmitting}
						className="w-1/2">
						{isSubmitting ? "Сохранение..." : "Сохранить"}
					</ActionButton>
				</div>
			</form>
		</div>
	);
};

export default EditIncomeForm;
