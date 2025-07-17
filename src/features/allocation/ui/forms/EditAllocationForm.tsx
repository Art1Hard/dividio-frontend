import type { IAllocation } from "@src/entities/allocation/model/allocation.types";
import ColorPicker from "@src/shared/ui/form/ColorPicker";
import useEditAllocation from "@src/features/allocation/lib/useEditAllocation";
import { useTranslation } from "react-i18next";
import { BaseButton, CancelButton } from "@src/shared/ui/buttons";
import {
	Input,
	InputError,
	InputGroup,
	InputLabel,
} from "@src/shared/ui/form/input";

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
			<form onSubmit={submit} className="space-y-6">
				<InputGroup error={errors.title}>
					<InputLabel>{t("allocation.features.edit.name.value")}</InputLabel>
					<Input
						placeholder={t("allocation.features.edit.name.placeholder")}
						{...register("title")}
					/>
					<InputError />
				</InputGroup>

				<InputGroup error={errors.percentage}>
					<InputLabel>
						{t("allocation.features.edit.percentage.value")}
					</InputLabel>
					<Input
						placeholder={t("allocation.features.edit.percentage.placeholder")}
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
