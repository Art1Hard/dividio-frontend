import ActionButton from "@src/shared/ui/buttons/ActionButton";
import type { IAllocationData } from "../../../../entities/allocation/model/allocation.types";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";

interface ViewModeToggleButtonProps {
	data: IAllocationData | undefined;
	onClick: () => void;
	isChart: boolean;
}

const ViewModeToggleButton = ({
	data,
	isChart,
	onClick,
}: ViewModeToggleButtonProps) => {
	return (
		<ActionButton
			className="flex items-center gap-2"
			disabled={!data || data.allocations.length <= 1}
			onClick={onClick}>
			{!isChart ? (
				<>
					<HiOutlineChartPie size={18} />
					Диаграмма
				</>
			) : (
				<>
					<HiListBullet size={19} />
					Список
				</>
			)}
		</ActionButton>
	);
};

export default ViewModeToggleButton;
