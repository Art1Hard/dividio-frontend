import type { FC } from "react";
import cn from "clsx";
import { setRusFormatValue } from "@src/lib/utils/formatValue";
import { motion } from "framer-motion";
import { itemFade } from "@src/lib/animations";
import type { IStatisticItem } from "@src/lib/types/types";

interface StatisticItemProps {
	statisticItem: IStatisticItem;
}

const StatisticItem: FC<StatisticItemProps> = ({
	statisticItem: { value, title, postfix, icon },
}) => {
	const IconComponent = icon.IconComponent;

	return (
		<motion.div
			variants={itemFade}
			className="max-w-sm bg-slate-200 dark:bg-slate-800 rounded-2xl p-6 shadow-md flex flex-1 items-center gap-4">
			<div
				className={cn(
					"p-3 rounded-full text-white",
					icon?.bgColor ?? "bg-blue-600",
					icon?.color ?? "text-white"
				)}>
				<IconComponent size={24} />
			</div>
			<div>
				<h2 className="text-lg text-slate-700 dark:text-slate-400">{title}</h2>
				<p className="text-3xl font-bold">
					{setRusFormatValue(value)}
					{postfix}
				</p>
			</div>
		</motion.div>
	);
};

export default StatisticItem;
