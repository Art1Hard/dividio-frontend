import type { IAllocation } from "@src/entities/allocation/model/allocation.types";
import ColorPicker from "@src/shared/ui/form/ColorPicker";
import useEditAllocation from "@src/features/allocation/lib/useEditAllocation";
import Input from "@src/shared/ui/form/Input";
import { useTranslation } from "react-i18next";
import { BaseButton, CancelButton } from "@src/shared/ui/buttons";

type EditAllocationFormProps = {
	defaultValues: IAllocation;
	onClose: () => void;
};

const EditAllocationForm = ({
	defaultValues,
	onClose,
}: EditAllocationFormProps) => {
	const { t } = useTranslation();
	const { register, watch, submit, isSubmitting, isDirty, errors } =
		useEditAllocation(defaultValues.id, defaultValues, onClose);

	const selectedColor = watch("color");

	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold mb-4 text-center text-balance">
				{t("allocation.features.edit.title")} "{defaultValues.title}"
			</h2>
			<form onSubmit={submit} className="space-y-8">
				<Input
					type="text"
					label="title"
					labelText={t("allocation.features.edit.name.value")}
					placeholder={t("allocation.features.edit.name.placeholder")}
					error={errors.title}
					{...register("title")}
				/>

				<Input
					type="text"
					label="percent"
					labelText={t("allocation.features.edit.percentage.value")}
					placeholder={t("allocation.features.edit.percentage.placeholder")}
					error={errors.percentage}
					{...register("percentage", { valueAsNumber: true })}
				/>

				<ColorPicker
					selectedColor={selectedColor}
					error={errors.color}
					{...register("color")}
				/>

				<div className="flex justify-between gap-3">
					<CancelButton onClick={onClose} className="w-1/2" />
					<BaseButton
						type="submit"
						disabled={!isDirty || isSubmitting}
						className="w-1/2">
						{isSubmitting
							? t("allocation.features.edit.saving")
							: t("allocation.features.edit.save")}
					</BaseButton>
				</div>
			</form>
		</div>
	);
};

export default EditAllocationForm;
