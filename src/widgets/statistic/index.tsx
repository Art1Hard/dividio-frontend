import { stepsFade } from "@src/shared/animations";
import useGetStatisticData from "./lib/useGetStatisticData";
import { motion } from "framer-motion";
import StatisticItem from "./ui/StatisticItem";
import StatisticSkeleton from "./ui/StatisticSkeleton";

const StatisticWidget = () => {
	const { statisticData, isLoading } = useGetStatisticData();

	if (isLoading) return <StatisticSkeleton />;

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
