import useChangeEditMode from "@features/account/lib/useChangeEditMode";
import ChangeUsernameForm from "@features/account/ui/ChangeUsernameForm";

interface UsernameFieldProps {
	username: string | undefined;
	isFetching: boolean;
}

const UsernameField = ({ username: name, isFetching }: UsernameFieldProps) => {
	const { editMode, enableEditMode, disableEditMode } = useChangeEditMode();

	return (
		<div>
			<h3 className="text-sm mb-1">Имя:</h3>
			{editMode ? (
				<ChangeUsernameForm username={name} disableEditMode={disableEditMode} />
			) : (
				<div className="flex items-center justify-between">
					<p className="dark:text-white text-sm @xs:text-lg">
						{!isFetching ? name || "—" : "Загрузка..."}
					</p>
					<button
						onClick={enableEditMode}
						className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 text-xs @xs:text-sm">
						Редактировать
					</button>
				</div>
			)}
		</div>
	);
};

export default UsernameField;
