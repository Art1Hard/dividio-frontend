import { motion } from "framer-motion";
import StatisticItem from "./StatisticItem";
import { stepsFade } from "@src/shared/animations";
import useGetStatisticData from "@src/features/statistic/lib/useGetStatisticData";

const StatisticSection = () => {
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

export default StatisticSection;
