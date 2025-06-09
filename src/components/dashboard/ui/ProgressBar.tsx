import type { FC } from "react";
import cn from "clsx";

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
	const bgColorClass = cn({
		"bg-blue-500": color === "blue-500",
		"bg-green-500": color === "green-500",
		"bg-red-500": color === "red-500",
		"bg-yellow-500": color === "yellow-500",
		"bg-gray-500": color === "gray-500",
		"bg-emerald-400/60": color === "emerald-400",
		// добавь другие цвета по необходимости
	});

	return (
		<div className="mb-4">
			<div className="flex justify-between mb-1">
				<p className="text-sm text-white">{label}</p>
				<p className="text-sm text-white">
					{percent}% — <span className="font-semibold">{amount} ₽</span>
				</p>
			</div>
			<div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
				<div
					className={`h-full ${bgColorClass} transition-all duration-300`}
					style={{ width: `${percent}%` }}></div>
			</div>
		</div>
	);
};

export default ProgressBar;
