import Modal from "@src/shared/ui/modal/Modal";
import CreateAllocationForm from "./forms/CreateAllocationForm";
import { useState } from "react";
import AllocationCreateButton from "./buttons/AllocationCreateButton";

const CreateAllocation = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<AllocationCreateButton onClick={() => setIsModalOpen(true)} />

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<CreateAllocationForm onClose={() => setIsModalOpen(false)} />
			</Modal>
		</>
	);
};

export default CreateAllocation;
