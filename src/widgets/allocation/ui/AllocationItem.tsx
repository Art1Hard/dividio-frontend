import type { IAllocation } from "@src/entities/allocation/model/allocation.types";
import type { FC } from "react";
import ProgressBar from "@src/shared/ui/ProgressBar";
import EditAllocation from "@src/features/allocation/ui/EditAllocation";
import DeleteAllocation from "@src/features/allocation/ui/DeleteAllocation";

interface AllocationItemProps {
	item: IAllocation;
}

const AllocationItem: FC<AllocationItemProps> = ({ item }) => {
	const { id, title, percentage, amount, color } = item;

	return (
		<div className="flex items-center justify-between gap-4 bg-slate-300/50 dark:bg-slate-700/50 rounded-lg px-4 py-3">
			<div className="flex-1">
				<ProgressBar
					label={title}
					percent={percentage}
					amount={amount}
					color={color}
				/>
			</div>

			<EditAllocation item={item} />
			<DeleteAllocation id={id} />
		</div>
	);
};

export default AllocationItem;
