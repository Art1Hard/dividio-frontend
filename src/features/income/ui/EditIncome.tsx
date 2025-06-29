import type { IIncome } from "@src/entities/income/model/income.types";
import EditButton from "@src/shared/ui/buttons/EditButton";
import Modal from "@src/shared/ui/modal/Modal";
import EditIncomeForm from "./forms/EditIncomeForm";
import { useState } from "react";

interface EditIncomeProps {
	item: IIncome;
}

const EditIncome = ({ item }: EditIncomeProps) => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<>
			<EditButton onClick={() => setIsOpenModal(true)} />
			<Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
				<EditIncomeForm onClose={() => setIsOpenModal(false)} income={item} />
			</Modal>
		</>
	);
};

export default EditIncome;
