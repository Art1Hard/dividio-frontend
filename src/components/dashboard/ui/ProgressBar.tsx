import { type FC } from "react";
import cn from "clsx";
import { progressColors } from "@src/lib/data/colors";
import { setRusFormatValue } from "@src/lib/utils/FormatValue";
import useDelayValue from "@src/hooks/useDelayValue";

type ProgressBarProps = {
	label: string;
	percent?: number;
	amount?: number;
	color?: string; // например: bg-blue-500, bg-green-500 и т.д.
};

const ProgressBar: FC<ProgressBarProps> = ({
	label,
	percent = 0,
	amount = 0,
	color = "gray-500",
}) => {
	const delayedPercent = useDelayValue(percent);
	const allowedColor = progressColors.find((c) => c.value === color)
		? color
		: "gray-500";

	return (
		<div className="mb-4">
			<div className="flex justify-between mb-1">
				<p className="text-sm text-white">{label}</p>
				<p className="text-sm text-white">
					{percent}% —{" "}
					<span className="font-semibold">{setRusFormatValue(amount)} ₽</span>
				</p>
			</div>
			<div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
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
