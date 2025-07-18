import { type FC } from "react";
import cn from "clsx";
import { progressColors } from "@src/shared/config/colors";
import { setRusFormatValue } from "@src/shared/lib/utils/formatValue";
import useDelayValue from "@src/shared/lib/hooks/useDelayValue";

type ProgressBarProps = {
	label: string;
	percent?: number;
	amount?: number;
	color?: string;
};

const ProgressBar: FC<ProgressBarProps> = ({
	label,
	percent = 0,
	amount = 0,
	color = "gray",
}) => {
	const delayedPercent = useDelayValue(percent);
	const allowedColor = progressColors.find((c) => c === color) ? color : "gray";

	return (
		<div className="mb-4">
			<div className="flex justify-between mb-2">
				<p className="text-sm">{label}</p>
				<p className="text-sm">
					{percent}% —{" "}
					<span className="font-semibold">{setRusFormatValue(amount)} ₽</span>
				</p>
			</div>
			<div className="w-full h-3 bg-slate-300 dark:bg-slate-700/50 rounded-full overflow-hidden">
				<div
					className={cn(
						"h-full transition-all duration-300",
						`bg-${allowedColor}-500`
					)}
					style={{
						width: `${delayedPercent}%`,
					}}></div>
			</div>
		</div>
	);
};

export default ProgressBar;
