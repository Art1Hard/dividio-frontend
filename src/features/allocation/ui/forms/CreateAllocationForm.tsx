import useCreateAllocation from "@src/features/allocation/lib/useCreateAllocation";
import Input from "@src/shared/ui/form/Input";
import ColorPicker from "@src/shared/ui/form/ColorPicker";
import ActionButton from "@src/shared/ui/buttons/ActionButton";
import { useTranslation } from "react-i18next";

interface CreateAllocationFormProps {
	onClose: () => void;
}

const CreateAllocationForm: React.FC<CreateAllocationFormProps> = ({
	onClose,
}) => {
	const { t } = useTranslation();
	const { register, submit, isSubmitting, errors, watch, isDirty } =
		useCreateAllocation(onClose);

	const selectedColor = watch("color");

	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold mb-4 text-center">
				{t("allocation.features.add.title")}
			</h2>

			<form onSubmit={submit} className="space-y-8">
				<Input
					label="title"
					labelText={t("allocation.features.add.name.value")}
					placeholder={t("allocation.features.add.name.placeholder")}
					{...register("title")}
					error={errors.title}
				/>

				<Input
					label="percentage"
					labelText={t("allocation.features.add.percentage.value")}
					placeholder={t("allocation.features.add.percentage.placeholder")}
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
						{t("allocation.features.add.cancel")}
					</ActionButton>

					<ActionButton
						disabled={!isDirty || isSubmitting}
						type="submit"
						className="w-1/2">
						{isSubmitting
							? t("allocation.features.add.creating")
							: t("allocation.features.add.create")}
					</ActionButton>
				</div>
			</form>
		</div>
	);
};

export default CreateAllocationForm;
