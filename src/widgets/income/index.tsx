import { FiPlusCircle } from "react-icons/fi";
import { useGetIncomesQuery } from "@src/entities/income/services/income.api";
import { useState } from "react";
import Modal from "@src/shared/ui/modal/Modal";
import CreateIncome from "@src/features/income/ui/CreateIncome";
import { AiFillGold } from "react-icons/ai";
import ActionButton from "@src/shared/ui/buttons/ActionButton";
import DashboardWidgetWrapper from "@src/shared/ui/DashboardWidgetWrapper";
import IncomeList from "./ui/IncomeList";

const IncomeWidget = ({ className }: { className?: string }) => {
	const { data, isLoading } = useGetIncomesQuery();
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	if (isLoading) return <p>Загрузка...</p>;
	if (!data) return null;

	return (
		<DashboardWidgetWrapper
			className={className}
			title="Источники"
			icon={
				<AiFillGold className="text-amber-500 dark:text-yellow-400" size={24} />
			}
			headerButton={
				<ActionButton
					onClick={() => setIsAddModalOpen(true)}
					className="flex items-center gap-2">
					<FiPlusCircle size={18} />
					Добавить
				</ActionButton>
			}>
			<IncomeList data={data.incomes} />

			<Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
				<CreateIncome onClose={() => setIsAddModalOpen(false)} />
			</Modal>
		</DashboardWidgetWrapper>
	);
};

export default IncomeWidget;
