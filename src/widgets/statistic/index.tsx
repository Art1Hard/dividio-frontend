import { stepsFade } from "@src/shared/animations";
import useGetStatisticData from "./lib/useGetStatisticData";
import { motion } from "framer-motion";
import StatisticItem from "./ui/StatisticItem";

const StatisticWidget = () => {
	const { statisticData, isLoading } = useGetStatisticData();

	if (isLoading) return <p>Загрузка статистики...</p>;

	return (
		<motion.div
			variants={stepsFade}
			initial="hidden"
			animate="show"
			className="flex gap-4 justify-between">
			{statisticData &&
				statisticData.map((statisticItem) => (
					<StatisticItem
						key={statisticItem.title}
						statisticItem={statisticItem}
					/>
				))}
		</motion.div>
	);
};

export default StatisticWidget;
