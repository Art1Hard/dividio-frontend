import { FiTrash2 } from "react-icons/fi";

const DeleteButton = ({
	onClick,
}: {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	return (
		<button
			type="button"
			className="p-2 rounded-md bg-slate-600 hover:bg-red-500 transition-colors text-white"
			onClick={onClick}
			title="Удалить">
			<FiTrash2 size={16} />
		</button>
	);
};

export default DeleteButton;
