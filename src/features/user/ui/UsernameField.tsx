import useChangeEditMode from "@features/user/lib/useChangeEditMode";
import { useGetUserQuery } from "@src/entities/user/services/user.api";
import ChangeUsernameForm from "@features/user/ui/ChangeUsernameForm";

const UsernameField = () => {
	const { data, isFetching } = useGetUserQuery();
	const { editMode, enableEditMode, disableEditMode } = useChangeEditMode();

	if (!data) return;
	const { name } = data;

	return (
		<div>
			<h3 className="text-sm mb-1">Имя:</h3>
			{editMode ? (
				<ChangeUsernameForm username={name} disableEditMode={disableEditMode} />
			) : (
				<div className="flex items-center justify-between">
					<p className="dark:text-white text-lg">
						{!isFetching ? name || "—" : "Загрузка..."}
					</p>
					<button
						onClick={enableEditMode}
						className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 text-sm">
						Редактировать
					</button>
				</div>
			)}
		</div>
	);
};

export default UsernameField;
