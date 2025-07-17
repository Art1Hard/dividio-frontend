import useCreateAllocation from "@src/features/allocation/lib/useCreateAllocation";
import Input from "@src/shared/ui/form/input/Input";
import ColorPicker from "@src/shared/ui/form/ColorPicker";
import { useTranslation } from "react-i18next";
import { BaseButton, CancelButton } from "@src/shared/ui/buttons";
import { InputError, InputGroup, InputLabel } from "@src/shared/ui/form/input";

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

			<form onSubmit={submit} className="space-y-6">
				<InputGroup error={errors.title}>
					<InputLabel>{t("allocation.features.add.name.value")}</InputLabel>
					<Input
						placeholder={t("allocation.features.add.name.placeholder")}
						{...register("title")}
					/>
					<InputError />
				</InputGroup>

				<InputGroup error={errors.percentage}>
					<InputLabel>
						{t("allocation.features.add.percentage.value")}
					</InputLabel>
					<Input
						placeholder={t("allocation.features.add.percentage.placeholder")}
						{...register("percentage", { valueAsNumber: true })}
					/>
					<InputError />
				</InputGroup>

				<ColorPicker
					selectedColor={selectedColor}
					error={errors.color}
					{...register("color")}
				/>

				<div className="flex justify-between gap-3">
					<CancelButton onClick={onClose} className="w-1/2" />

					<BaseButton
						disabled={!isDirty || isSubmitting}
						type="submit"
						className="w-1/2">
						{isSubmitting
							? t("allocation.features.add.creating")
							: t("allocation.features.add.create")}
					</BaseButton>
				</div>
			</form>
		</div>
	);
};

export default CreateAllocationForm;
