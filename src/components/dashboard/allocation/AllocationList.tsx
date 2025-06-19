import { FaChartPie } from "react-icons/fa";
import { useGetAllocationsQuery } from "@src/store/allocation/allocation.api";
import AllocationItem from "./AllocationItem";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@src/components/ui/Modal";
import CreateAllocation from "./CreateAllocation";
import { useState } from "react";
import { defaultShowAnimation } from "@src/lib/animations/itemAnimations";
import AllocationChart from "@src/components/dashboard/allocation/AllocationChart";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";

const AllocationList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isChartOpen, setIsChartOpen] = useState(false);
	const { data, isLoading } = useGetAllocationsQuery();

	if (isLoading) return <p>Загрузка...</p>;

	return (
		<div className="bg-slate-800 rounded-2xl p-6 shadow-md">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-3">
					<FaChartPie className="text-purple-400" size={20} />
					<h2 className="text-lg font-semibold">Распределение</h2>
				</div>

				<button
					type="button"
					onClick={() => setIsChartOpen((prev) => !prev)}
					className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
					{!isChartOpen ? (
						<>
							<HiOutlineChartPie className="text-white" size={18} />
							Диаграмма
						</>
					) : (
						<>
							<HiListBullet className="text-white" size={19} />
							Список
						</>
					)}
				</button>
			</div>

			<div className="space-y-4 mb-6">
				{data &&
					(!isChartOpen ? (
						<AnimatePresence>
							{data.allocations.map((allocation) => (
								<motion.div
									layout
									key={allocation.id}
									variants={defaultShowAnimation}
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

			<button
				onClick={() => setIsModalOpen(true)}
				type="button"
				className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-xl transition">
				<span className="text-xl leading-none">＋</span>
				<span>Добавить категорию</span>
			</button>

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

export default AllocationList;
