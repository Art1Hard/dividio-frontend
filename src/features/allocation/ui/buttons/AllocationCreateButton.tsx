import ActionButton from "@src/shared/ui/buttons/ActionButton";
import { useGetIncomesQuery } from "@src/entities/income/services/income.api";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface AllocationCreateButtonProps {
	onClick: () => void;
}

const AllocationCreateButton = ({ onClick }: AllocationCreateButtonProps) => {
	const { t } = useTranslation();
	const { data: incomeData } = useGetIncomesQuery();
	return (
		<ActionButton
			color="primary"
			onClick={onClick}
			disabled={!incomeData || incomeData.incomes.length <= 0}
			className="w-full flex items-center justify-center gap-2 font-semibold">
			<span className="text-xl leading-none">＋</span>
			<span>{t("allocation.buttons.add")}</span>
		</ActionButton>
	);
};

export default memo(AllocationCreateButton);
