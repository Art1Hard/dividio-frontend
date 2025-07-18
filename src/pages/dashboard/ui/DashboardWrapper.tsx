import { useGetUserQuery } from "@src/entities/user/services/user.api";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
	const { data: user, isLoading: isUserLoading } = useGetUserQuery();
	const { t } = useTranslation();

	return (
		<div className="min-h-full flex items-center  py-12 px-6">
			<div className="max-w-6xl w-full mx-auto space-y-10">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-2">
						{isUserLoading ? (
							<span className="animate-pulse">
								{t("dashboard.loadingTitle")}
							</span>
						) : (
							`${t("dashboard.title")}${
								user && user.name ? `, ${user.name}` : ""
							}!`
						)}
					</h1>
					<p className="text-black/70 dark:text-slate-400">
						{isUserLoading ? (
							<span className="animate-pulse">
								{t("dashboard.loadingSubtitle")}
							</span>
						) : (
							t("dashboard.subtitle")
						)}
					</p>
				</div>

				<div className="space-y-8">{children}</div>
			</div>
		</div>
	);
};

export default DashboardWrapper;
