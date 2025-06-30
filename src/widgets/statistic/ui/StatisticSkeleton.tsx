const StatisticSkeleton = () => {
	return (
		<div className="flex gap-4 justify-between">
			<div className="flex-1 flex p-6 gap-4 items-center bg-slate-200 dark:bg-slate-800 h-28 shadow-md rounded-2xl">
				<div className="animate-pulse rounded-full h-12 w-12 bg-slate-300 dark:bg-slate-700" />
				<div>
					<div className="animate-pulse rounded-2xl bg-slate-300 dark:bg-slate-700 h-4 w-44 mb-2" />
					<div className="animate-pulse rounded-2xl bg-slate-300 dark:bg-slate-700 h-6 w-36" />
				</div>
			</div>
			<div className="flex-1 flex p-6 gap-4 items-center bg-slate-200 dark:bg-slate-800 h-28 shadow-md rounded-2xl">
				<div className="animate-pulse rounded-full h-12 w-12 bg-slate-300 dark:bg-slate-700" />
				<div>
					<div className="animate-pulse rounded-2xl bg-slate-300 dark:bg-slate-700 h-4 w-44 mb-2" />
					<div className="animate-pulse rounded-2xl bg-slate-300 dark:bg-slate-700 h-6 w-36" />
				</div>
			</div>
			<div className="flex-1 flex p-6 gap-4 items-center bg-slate-200 dark:bg-slate-800 h-28 shadow-md rounded-2xl">
				<div className="animate-pulse rounded-full h-12 w-12 bg-slate-300 dark:bg-slate-700" />
				<div>
					<div className="animate-pulse rounded-2xl bg-slate-300 dark:bg-slate-700 h-4 w-44 mb-2" />
					<div className="animate-pulse rounded-2xl bg-slate-300 dark:bg-slate-700 h-6 w-36" />
				</div>
			</div>
		</div>
	);
};

export default StatisticSkeleton;
