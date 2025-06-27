import ActionButton from "@src/components/ui/buttons/ActionButton";
import { useGetIncomesQuery } from "@src/features/income/services/income.api";

interface AllocationCreateButtonProps {
	onClick: () => void;
}

const AllocationCreateButton = ({ onClick }: AllocationCreateButtonProps) => {
	const { data: incomeData } = useGetIncomesQuery();

	return (
		<ActionButton
			color="secondary"
			onClick={onClick}
			disabled={!incomeData || incomeData.incomes.length <= 0}
			className="w-full flex items-center justify-center gap-2 font-semibold">
			<span className="text-xl leading-none">＋</span>
			<span>Добавить категорию</span>
		</ActionButton>
	);
};

export default AllocationCreateButton;
