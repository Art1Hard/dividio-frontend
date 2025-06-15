import Input from "@src/components/ui/Input";
import useEditIncome from "@src/hooks/income/useEditIncome";
import type { IIncome } from "@src/lib/types/types";
import type { FC } from "react";

interface IEditIncomeFormProps {
	onClose: () => void;
	income: IIncome;
}

const EditIncomeForm: FC<IEditIncomeFormProps> = ({ onClose, income }) => {
	const { register, submit, isSubmitting, errors } = useEditIncome(
		onClose,
		income.id,
		income
	);

	return (
		<form onSubmit={submit} className="space-y-8 text-white">
			<h2 className="text-lg font-semibold text-center">
				Редактировать "{income.title}"
			</h2>

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
				<button
					type="button"
					onClick={onClose}
					className="w-1/2 py-2 rounded-lg bg-slate-600 hover:bg-slate-700 transition">
					Отмена
				</button>
				<button
					type="submit"
					disabled={isSubmitting}
					className="w-1/2 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
					{isSubmitting ? "Сохранение..." : "Сохранить"}
				</button>
			</div>
		</form>
	);
};

export default EditIncomeForm;
