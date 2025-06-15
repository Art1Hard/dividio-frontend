import useCreateAllocation from "@src/hooks/allocation/useCreateAllocation";
import Input from "@src/components/ui/Input";
import ColorPicker from "@src/components/dashboard/ui/ColorPicker";

interface CreateAllocationProps {
	onClose: () => void;
}

const CreateAllocation: React.FC<CreateAllocationProps> = ({ onClose }) => {
	const { register, submit, isSubmitting, errors, watch, isDirty } =
		useCreateAllocation(onClose);

	const selectedColor = watch("color");

	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold text-white mb-4 text-center">
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

				<button
					disabled={!isDirty || isSubmitting}
					type="submit"
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
					{isSubmitting ? "Создание..." : "Создать"}
				</button>
			</form>
		</div>
	);
};

export default CreateAllocation;
