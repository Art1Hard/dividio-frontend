import { BaseButton } from "@src/shared/ui/buttons";
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
		<BaseButton
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
		</BaseButton>
	);
};

export default ViewModeToggleButton;
