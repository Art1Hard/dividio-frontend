import useCreateIncome from "@src/features/income/hooks/useCreateIncome";
import Input from "@src/components/ui/Input";
import type { FC } from "react";
import ActionButton from "@src/components/ui/buttons/ActionButton";

interface CreateIncomeFormProps {
	onClose: () => void;
}

const CreateIncomeForm: FC<CreateIncomeFormProps> = ({ onClose }) => {
	const { register, submit, isSubmitting, isDirty, errors } =
		useCreateIncome(onClose);

	return (
		<form onSubmit={submit} className="space-y-8">
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
				<ActionButton color="secondary" onClick={onClose} className="w-1/2">
					Отмена
				</ActionButton>
				<ActionButton
					type="submit"
					disabled={!isDirty || isSubmitting}
					className="w-1/2">
					{isSubmitting ? "Создание..." : "Создать"}
				</ActionButton>
			</div>
		</form>
	);
};

export default CreateIncomeForm;
