import type { IIncome } from "@src/entities/income/model/income.types";
import { setRusFormatValue } from "@src/shared/lib/utils/formatValue";
import DeleteIncome from "@src/features/income/ui/DeleteIncome";
import EditIncome from "@src/features/income/ui/EditIncome";

const IncomeItem = ({ item }: { item: IIncome }) => {
	const { id, title, amount } = item;

	return (
		<div className="flex items-center justify-between bg-slate-300/50 dark:bg-slate-700/50 px-4 py-3 rounded-lg shadow-sm">
			<div>
				<p className="font-medium mb-2">{title}</p>
				<p className="text-xl font-bold">{setRusFormatValue(amount)} ₽</p>
			</div>
			<div className="flex gap-4">
				<EditIncome item={item} />
				<DeleteIncome id={id} />
			</div>
		</div>
	);
};

export default IncomeItem;
