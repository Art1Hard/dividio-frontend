import { useGetIncomesQuery } from "@src/entities/income/services/income.api";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { BaseButton } from "@src/shared/ui/buttons";
import { FiPlus } from "react-icons/fi";

interface AllocationCreateButtonProps {
	onClick: () => void;
}

const AllocationCreateButton = ({ onClick }: AllocationCreateButtonProps) => {
	const { t } = useTranslation();
	const { data: incomeData } = useGetIncomesQuery();
	return (
		<BaseButton
			color="primary"
			onClick={onClick}
			disabled={!incomeData || incomeData.incomes.length <= 0}
			className="w-full flex items-center justify-center gap-2 font-semibold">
			<FiPlus size={18} />
			<span>{t("allocation.buttons.add")}</span>
		</BaseButton>
	);
};

export default memo(AllocationCreateButton);
