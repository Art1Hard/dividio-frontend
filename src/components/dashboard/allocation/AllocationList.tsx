import { FaChartPie } from "react-icons/fa";
import { useGetAllocationsQuery } from "@src/store/allocation/allocation.api";
import AllocationItem from "./AllocationItem";
import { AnimatePresence } from "framer-motion";
import Modal from "@src/components/ui/Modal";
import CreateAllocation from "./CreateAllocation";
import { useState } from "react";

const AllocationList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { data, isLoading } = useGetAllocationsQuery();

	if (isLoading) return <p>Загрузка...</p>;

	return (
		<div className="bg-slate-800 rounded-2xl p-6 shadow-md">
			<div className="flex items-center gap-3 mb-4">
				<FaChartPie className="text-purple-400" size={20} />
				<h2 className="text-lg font-semibold">Распределение</h2>
			</div>

			<div className="space-y-4 mb-6">
				{data &&
					data.allocations.map((allocation) => (
						<AllocationItem key={allocation.id} item={allocation} />
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
