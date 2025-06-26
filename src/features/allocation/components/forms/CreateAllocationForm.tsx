import useCreateAllocation from "@src/features/allocation/hooks/useCreateAllocation";
import Input from "@src/components/ui/Input";
import ColorPicker from "@src/components/ui/ColorPicker";
import ActionButton from "@src/components/ui/buttons/ActionButton";

interface CreateAllocationFormProps {
	onClose: () => void;
}

const CreateAllocationForm: React.FC<CreateAllocationFormProps> = ({
	onClose,
}) => {
	const { register, submit, isSubmitting, errors, watch, isDirty } =
		useCreateAllocation(onClose);

	const selectedColor = watch("color");

	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold mb-4 text-center">
				Создание категории
			</h2>

			<form onSubmit={submit} className="space-y-8">
				<Input
					label="title"
					labelText="Название"
					placeholder="Например: Сбережения"
					{...register("title")}
					error={errors.title}
				/>

				<Input
					label="percentage"
					labelText="Процент"
					placeholder="Например: 20"
					{...register("percentage", { valueAsNumber: true })}
					error={errors.percentage}
				/>

				<ColorPicker
					selectedColor={selectedColor}
					error={errors.color}
					{...register("color")}
				/>

				<div className="flex justify-between gap-3">
					<ActionButton
						color="secondary"
						disabled={isSubmitting}
						onClick={onClose}
						className="w-1/2">
						Отмена
					</ActionButton>

					<ActionButton
						disabled={!isDirty || isSubmitting}
						type="submit"
						className="w-1/2">
						{isSubmitting ? "Создание..." : "Создать"}
					</ActionButton>
				</div>
			</form>
		</div>
	);
};

export default CreateAllocationForm;
