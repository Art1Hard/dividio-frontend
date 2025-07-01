import ActionButton from "@src/shared/ui/buttons/ActionButton";
import type { IAllocationData } from "../../../../entities/allocation/model/allocation.types";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation();

	return (
		<ActionButton
			className="flex items-center gap-2"
			disabled={!data || data.allocations.length <= 1}
			onClick={onClick}>
			{!isChart ? (
				<>
					<HiOutlineChartPie size={18} />
					{t("allocation.buttons.chart")}
				</>
			) : (
				<>
					<HiListBullet size={19} />
					{t("allocation.buttons.list")}
				</>
			)}
		</ActionButton>
	);
};

export default ViewModeToggleButton;
