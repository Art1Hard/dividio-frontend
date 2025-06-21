import { FaChartPie } from "react-icons/fa";
import { useGetAllocationsQuery } from "@src/features/allocation/api/allocation.api";
import AllocationItem from "./AllocationItem";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@src/components/ui/Modal";
import CreateAllocation from "./CreateAllocation";
import { useState } from "react";
import { defaultScale } from "@src/lib/animations";
import AllocationChart from "@src/features/allocation/components/AllocationChart";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";
import ActionButton from "@src/components/ui/buttons/ActionButton";
import { useGetIncomesQuery } from "@src/features/income/api/income.api";

const AllocationSource = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isChartOpen, setIsChartOpen] = useState(false);
	const { data, isLoading } = useGetAllocationsQuery();
	const { data: incomeData } = useGetIncomesQuery();

	if (isLoading) return <p>Загрузка...</p>;

	return (
		<div className="bg-slate-200 dark:bg-slate-800 rounded-2xl p-6 shadow-md">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-3">
					<FaChartPie
						className="text-purple-500 dark:text-purple-400"
						size={20}
					/>
					<h2 className="text-lg font-semibold">Распределение</h2>
				</div>

				<ActionButton
					className="flex items-center gap-2"
					disabled={!data || data.allocations.length <= 1}
					onClick={() => setIsChartOpen((prev) => !prev)}>
					{!isChartOpen ? (
						<>
							<HiOutlineChartPie size={18} />
							Диаграмма
						</>
					) : (
						<>
							<HiListBullet size={19} />
							Список
						</>
					)}
				</ActionButton>
			</div>

			<div className="space-y-4 mb-6">
				{data &&
					(!isChartOpen ? (
						<AnimatePresence>
							{data.allocations.map((allocation) => (
								<motion.div
									layout
									key={allocation.id}
									variants={defaultScale}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{ duration: 0.2 }}>
									<AllocationItem item={allocation} />
								</motion.div>
							))}
						</AnimatePresence>
					) : (
						<AllocationChart data={data.allocations} />
					))}
			</div>

			<ActionButton
				color="secondary"
				onClick={() => setIsModalOpen(true)}
				disabled={!incomeData || incomeData.incomes.length <= 0}
				className="w-full flex items-center justify-center gap-2 font-semibold">
				<span className="text-xl leading-none">＋</span>
				<span>Добавить категорию</span>
			</ActionButton>

			<AnimatePresence>
				{isModalOpen && (
					<Modal onClose={() => setIsModalOpen(false)}>
						<CreateAllocation onClose={() => setIsModalOpen(false)} />
					</Modal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AllocationSource;
