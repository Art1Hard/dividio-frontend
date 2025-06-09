import type { IAllocation } from "@src/lib/types/types";
import type { FC } from "react";
import ProgressBar from "@components/dashboard/ui/ProgressBar";
import { FiTrash2 } from "react-icons/fi";
import { useDeleteAllocationMutation } from "@src/store/allocation/allocation.api";

interface AllocationItemProps {
	item: IAllocation;
}

const AllocationItem: FC<AllocationItemProps> = ({ item }) => {
	const { id, title, percentage, amount, color } = item;

	const [deleteAllocation] = useDeleteAllocationMutation();

	return (
		<div className="flex items-center justify-between gap-4 bg-slate-700/50 rounded-lg px-4 py-3">
			<div className="flex-1">
				<ProgressBar
					label={title}
					percent={percentage}
					amount={amount}
					color={color}
				/>
			</div>

			<button
				type="button"
				className="p-2 rounded-md bg-slate-600 hover:bg-red-500 transition-colors text-white"
				onClick={async () => {
					const result = confirm("Вы действительно хотите удалить?");
					if (result) await deleteAllocation(id);
				}}
				title="Удалить">
				<FiTrash2 size={16} />
			</button>
		</div>
	);
};

export default AllocationItem;
