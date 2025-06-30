import { useGetUserQuery } from "@src/entities/user/services/user.api";
import Logout from "@src/features/account/ui/Logout";
import UsernameField from "@src/features/account/ui/UsernameField";
import { ToggleTheme } from "@src/features/theme/components/ToggleTheme";
import AccountField from "./ui/AccountField";
import AccountSkeleton from "./ui/AccountSkeleton";

const AccountWidget = () => {
	const { data: user, isLoading, isFetching } = useGetUserQuery();

	if (isLoading) return <AccountSkeleton />;

	if (!user) {
		return <p>Пользователя не существует</p>;
	}

	return (
		<div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-xl w-full max-w-md mx-auto shadow-md @container">
			<h2 className="text-center  font-bold mb-4 @xs:text-2xl">
				Личный кабинет
			</h2>
			<div className="dark:text-slate-400 space-y-4 mb-4">
				<AccountField title="ID:" content={user.id} />
				<AccountField title="Email:" content={user.email} />
				<UsernameField username={user.name} isFetching={isFetching} />
				<ToggleTheme extended />
			</div>

			<hr className="border-black dark:border-slate-600 mb-4" />

			<Logout />
		</div>
	);
};

export default AccountWidget;
