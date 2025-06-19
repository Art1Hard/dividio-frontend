import Input from "../ui/Input";
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
		<form onSubmit={submit} className="relative flex items-center gap-2 mb-8">
			<Input {...register("name")} type="text" placeholder="Иван" />

			{errors.name && errors.name.message && (
				<p className="absolute bottom-[-25px] left-0 text-[14px] text-red-500">
					{errors.name.message}
				</p>
			)}

			<button
				type="submit"
				disabled={isSubmitting}
				className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded disabled:opacity-50">
				{isSubmitting ? "Сохранение..." : "Сохранить"}
			</button>
			<button
				type="button"
				onClick={disableEditMode}
				className="text-slate-300 hover:text-white">
				Отмена
			</button>
		</form>
	);
};

export default ChangeUsernameForm;
