import ActionButton from "../UI/ActionButton";
import Input from "../UI/Input";
import useChangeUsername from "@src/hooks/user/useChangeUsername";

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
		<form onSubmit={submit} className="relative flex items-center gap-2">
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
