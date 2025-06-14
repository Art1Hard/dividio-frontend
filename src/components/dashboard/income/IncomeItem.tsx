import DeleteButton from "@src/components/ui/DeleteButton";
import EditButton from "@src/components/ui/EditButton";
import type { IIncome } from "@src/lib/types/types";
import { setRusFormatValue } from "@src/lib/utils/FormatValue";
import { useDeleteIncomeMutation } from "@src/store/income/income.api";

const IncomeItem = ({ source }: { source: IIncome }) => {
	const { title, amount } = source;
	const [deleteIncome] = useDeleteIncomeMutation();

	return (
		<div className="flex items-center justify-between bg-slate-700 px-4 py-3 rounded-lg shadow-sm">
			<div>
				<p className="text-white font-medium mb-2">{title}</p>
				<p className="text-white text-xl font-bold">
					{setRusFormatValue(amount)} ₽
				</p>
			</div>
			<div className="flex gap-4">
				<EditButton onClick={() => {}} />

				<DeleteButton
					onClick={() => {
						const result = window.confirm(
							`Вы уверены, что хотите удалить источник дохода "${title}"?`
						);
						if (result) deleteIncome(source.id);
					}}
				/>
			</div>
		</div>
	);
};

export default IncomeItem;
