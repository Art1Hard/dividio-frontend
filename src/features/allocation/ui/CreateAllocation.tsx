import Modal from "@src/shared/ui/modal/Modal";
import CreateAllocationForm from "./forms/CreateAllocationForm";
import { useCallback, useState } from "react";
import AllocationCreateButton from "./buttons/AllocationCreateButton";

const CreateAllocation = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = useCallback(() => setIsModalOpen(true), []);
	const closeModal = useCallback(() => setIsModalOpen(false), []);

	return (
		<>
			<AllocationCreateButton onClick={openModal} />

			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<CreateAllocationForm onClose={closeModal} />
			</Modal>
		</>
	);
};

export default CreateAllocation;
