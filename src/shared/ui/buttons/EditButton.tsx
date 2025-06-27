import { FiEdit2 } from "react-icons/fi";

const EditButton = ({
	onClick,
}: {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	return (
		<button
			type="button"
			className="p-2 rounded-md bg-slate-300 hover:bg-blue-500 dark:bg-slate-600 dark:hover:bg-blue-500 transition-colors"
			onClick={onClick}
			title="Редактировать">
			<FiEdit2 size={16} />
		</button>
	);
};

export default EditButton;
