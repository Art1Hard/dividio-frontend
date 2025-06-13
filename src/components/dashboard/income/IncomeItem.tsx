import type { IIncome } from "@src/lib/types/types";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const IncomeItem = ({ source }: { source: IIncome }) => {
	const { title, amount } = source;

	return (
		<div className="flex items-center justify-between bg-slate-800 p-3 rounded-lg shadow-sm">
			<div>
				<p className="text-white font-medium">{title}</p>
				<p className="text-slate-400 text-sm">{amount} ₽</p>
			</div>
			<div className="flex gap-2">
				<button
					className="text-blue-400 hover:text-blue-600 transition"
					title="Редактировать">
					<FiEdit2 size={16} />
				</button>
				<button
					className="text-red-400 hover:text-red-600 transition"
					title="Удалить">
					<FiTrash2 size={16} />
				</button>
			</div>
		</div>
	);
};

export default IncomeItem;
