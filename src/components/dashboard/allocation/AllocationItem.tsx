import type { IAllocation } from "@src/lib/types/types";
import { useState, type FC } from "react";
import ProgressBar from "@components/dashboard/ui/ProgressBar";
import { useDeleteAllocationMutation } from "@src/store/allocation/allocation.api";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import EditAllocationForm from "./EditAllocationForm";
import Modal from "@src/components/ui/Modal";

interface AllocationItemProps {
	item: IAllocation;
}

const AllocationItem: FC<AllocationItemProps> = ({ item }) => {
	const { id, title, percentage, amount, color } = item;

	const [deleteAllocation] = useDeleteAllocationMutation();
	const [isOpen, setIsOpen] = useState(false);

	const deleteHandler = async () => {
		const result = confirm("Вы действительно хотите удалить?");
		if (result) await deleteAllocation(id);
	};

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

			<EditButton onClick={() => setIsOpen(true)} />

			<DeleteButton onClick={deleteHandler} />

			{isOpen && (
				<Modal onClose={() => setIsOpen(false)}>
					<EditAllocationForm
						defaultValues={item}
						onClose={() => setIsOpen(false)}
					/>
				</Modal>
			)}
		</div>
	);
};

export default AllocationItem;
