const AccountSkeleton = () => {
	return (
		<div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-xl w-full max-w-md mx-auto shadow-md">
			<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-7 rounded-xl max-w-56 mx-auto mb-4 w-full" />
			<div className="mb-4 space-y-6">
				<div>
					<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-4 rounded-xl max-w-24 w-full mb-2" />
					<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-5 rounded-xl max-w-40 w-full" />
				</div>
				<div>
					<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-4 rounded-xl max-w-24 w-full mb-2" />
					<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-5 rounded-xl max-w-40 w-full" />
				</div>
				<div>
					<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-4 rounded-xl max-w-24 w-full mb-2" />
					<div className="flex justify-between">
						<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-5 rounded-xl max-w-40 w-full" />
						<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-5 rounded-xl max-w-32 w-full" />
					</div>
				</div>
				<div>
					<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-4 rounded-xl max-w-24 w-full mb-2" />
					<div className="flex justify-between">
						<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-5 rounded-xl max-w-40 w-full" />
						<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-5 rounded-xl max-w-32 w-full" />
					</div>
				</div>
			</div>
			<hr className="animate-pulse border-slate-300 dark:border-slate-700 mb-4" />
			<div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-10 rounded-lg w-full" />
		</div>
	);
};

export default AccountSkeleton;
