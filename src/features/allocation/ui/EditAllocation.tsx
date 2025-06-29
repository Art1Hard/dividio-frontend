import EditButton from "@src/shared/ui/buttons/EditButton";
import Modal from "@src/shared/ui/modal/Modal";
import EditAllocationForm from "./forms/EditAllocationForm";
import type { IAllocation } from "@src/entities/allocation/model/allocation.types";
import { useState } from "react";

const EditAllocation = ({ item }: { item: IAllocation }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<EditButton onClick={() => setIsModalOpen(true)} />
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<EditAllocationForm
					defaultValues={item}
					onClose={() => setIsModalOpen(false)}
				/>
			</Modal>
		</>
	);
};

export default EditAllocation;
