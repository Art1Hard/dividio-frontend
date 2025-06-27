import Modal from "@src/shared/ui/modal/Modal";
import { AnimatePresence } from "framer-motion";
import CreateAllocationForm from "./forms/CreateAllocationForm";
import { useState } from "react";
import AllocationCreateButton from "./buttons/AllocationCreateButton";

const CreateAllocation = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<AllocationCreateButton onClick={() => setIsModalOpen(true)} />

			<AnimatePresence>
				{isModalOpen && (
					<Modal onClose={() => setIsModalOpen(false)}>
						<CreateAllocationForm onClose={() => setIsModalOpen(false)} />
					</Modal>
				)}
			</AnimatePresence>
		</>
	);
};

export default CreateAllocation;
