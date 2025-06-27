import ActionButton from "../../../components/ui/buttons/ActionButton";
import Input from "../../../components/ui/Input";
import useChangeUsername from "@src/features/user/lib/useChangeUsername";

interface ChangeUsernameFormProps {
	username: string | undefined;
	disableEditMode: () => void;
}

const ChangeUsernameForm = ({
	username,
	disableEditMode,
}: ChangeUsernameFormProps) => {
	const { register, submit, errors, isSubmitting } = useChangeUsername(
		username,
		disableEditMode
	);

	return (
		<form onSubmit={submit} className="relative flex items-center gap-2 mb-8">
			<Input {...register("name")} type="text" placeholder="Иван" />

			{errors.name && errors.name.message && (
				<p className="absolute bottom-[-25px] left-0 text-[14px] text-red-500">
					{errors.name.message}
				</p>
			)}

			<ActionButton type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Сохранение..." : "Сохранить"}
			</ActionButton>
			<ActionButton color="secondary" onClick={disableEditMode}>
				Отмена
			</ActionButton>
		</form>
	);
};

export default ChangeUsernameForm;
