import useCreateIncome from "@src/hooks/income/useCreateIncome";
import Input from "@src/components/ui/Input";
import type { FC } from "react";

interface CreateIncomeFormProps {
	onClose: () => void;
}

const CreateIncomeForm: FC<CreateIncomeFormProps> = ({ onClose }) => {
	const { register, submit, isSubmitting, errors } = useCreateIncome(onClose);

	return (
		<form onSubmit={submit} className="space-y-8 text-white">
			<h2 className="text-lg font-semibold text-center">
				Добавить источник дохода
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
					{isSubmitting ? "Создание..." : "Создать"}
				</button>
			</div>
		</form>
	);
};

export default CreateIncomeForm;
