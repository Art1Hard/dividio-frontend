interface UsernameSectionProps {
	name: string | undefined;
	isFetching: boolean;
	enableEditMode: () => void;
}

const UsernameSection = ({
	name,
	isFetching,
	enableEditMode,
}: UsernameSectionProps) => {
	return (
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
	);
};

export default UsernameSection;
