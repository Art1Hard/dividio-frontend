import type { IAllocation } from "@src/lib/types/types";
import ColorPicker from "../ui/ColorPicker";
import useEditAllocation from "@src/hooks/allocation/useEditAllocation";
import Input from "@src/components/ui/Input";

type Props = {
	defaultValues: IAllocation;
	onClose: () => void;
};

const EditAllocationForm = ({ defaultValues, onClose }: Props) => {
	const { register, watch, submit, isSubmitting, errors } = useEditAllocation(
		defaultValues.id,
		defaultValues,
		onClose
	);

	const selectedColor = watch("color");

	return (
		<form onSubmit={submit} className="space-y-8 text-white">
			<h2 className="text-lg font-semibold text-center">
				Редактировать категорию
			</h2>

			<Input
				type="text"
				label="title"
				labelText="Название"
				placeholder="Например: Сбережения"
				error={errors.title}
				{...register("title")}
			/>

			<Input
				type="text"
				label="percent"
				labelText="Процент"
				placeholder="Например: 20"
				error={errors.percentage}
				{...register("percentage", { valueAsNumber: true })}
			/>

			<ColorPicker
				selectedColor={selectedColor}
				error={errors.color}
				{...register("color")}
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

export default EditAllocationForm;
