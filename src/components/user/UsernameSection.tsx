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
			<p className="text-lg">{!isFetching ? name || "—" : "Загрузка..."}</p>
			<button
				onClick={enableEditMode}
				className="text-blue-400 hover:text-blue-500 text-sm">
				Редактировать
			</button>
		</div>
	);
};

export default UsernameSection;
