import { FiEdit2 } from "react-icons/fi";

const EditButton = ({
	onClick,
}: {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	return (
		<button
			type="button"
			className="p-2 rounded-md bg-slate-600 hover:bg-blue-500 transition-colors text-white"
			onClick={onClick}
			title="Редактировать">
			<FiEdit2 size={16} />
		</button>
	);
};

export default EditButton;
