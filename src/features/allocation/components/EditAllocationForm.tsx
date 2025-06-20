import type { IAllocation } from "@src/features/allocation/allocation.types";
import ColorPicker from "@components/ui/ColorPicker";
import useEditAllocation from "@src/features/allocation/hooks/useEditAllocation";
import Input from "@src/components/ui/Input";
import ActionButton from "@src/components/ui/buttons/ActionButton";

type Props = {
	defaultValues: IAllocation;
	onClose: () => void;
};

const EditAllocationForm = ({ defaultValues, onClose }: Props) => {
	const { register, watch, submit, isSubmitting, isDirty, errors } =
		useEditAllocation(defaultValues.id, defaultValues, onClose);

	const selectedColor = watch("color");

	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold mb-4 text-center">
				Редактирование категории <br />"{defaultValues.title}"
			</h2>
			<form onSubmit={submit} className="space-y-8">
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

export default EditAllocationForm;
