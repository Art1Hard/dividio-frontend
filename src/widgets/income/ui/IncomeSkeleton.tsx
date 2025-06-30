const IncomeSkeleton = () => {
	return (
		<div className="flex-1 bg-slate-200 dark:bg-slate-800 shadow-md rounded-2xl p-6">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-3">
					<div className="animate-pulse rounded-full bg-slate-300 dark:bg-slate-700 h-8 w-8" />
					<div className="animate-pulse rounded-xl h-6 w-40 bg-slate-300 dark:bg-slate-700" />
				</div>

				<div className="animate-pulse rounded-lg h-10 w-36 bg-slate-300 dark:bg-slate-700" />
			</div>
			<div className="space-y-4">
				<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-20 rounded-lg shadow-sm" />
				<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-20 rounded-lg shadow-sm" />
			</div>
		</div>
	);
};

export default IncomeSkeleton;
