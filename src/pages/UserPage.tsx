import { useThunks } from "@hooks/redux/thunks";
import ChangeUsernameForm from "@src/features/user/components/ChangeUsernameForm";
import UsernameSection from "@src/features/user/components/UsernameSection";
import useChangeEditMode from "@src/features/user/hooks/useChangeEditMode";
import { defaultScale } from "@src/lib/animations";
import { useGetUserQuery } from "@src/features/user/services/user.api";
import { motion } from "framer-motion";
import { ToggleThemeButton } from "@src/features/theme/components/ToggleThemeButton";

const User = () => {
	const { logout } = useThunks();
	const { data: user, isLoading, isFetching } = useGetUserQuery();
	const { editMode, enableEditMode, disableEditMode } = useChangeEditMode();

	if (isLoading) return <p>Загрузка...</p>;

	if (!user) {
		return <p>Пользователя не существует</p>;
	}

	return (
		<motion.div
			variants={defaultScale}
			animate="animate"
			initial="initial"
			className="h-full flex items-center">
			<div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-xl w-full max-w-md mx-auto shadow-md">
				<h2 className="text-center text-2xl font-bold mb-4">Личный кабинет</h2>
				<div className="dark:text-slate-400 space-y-4 mb-4">
					<div>
						<h3 className="text-sm">ID:</h3>
						<p className="text-lg">{user.id}</p>
					</div>

					<div>
						<h3 className="text-sm">Email:</h3>
						<p className="text-lg">{user.email}</p>
					</div>

					<div>
						<h3 className="text-sm mb-1">Имя:</h3>
						{editMode ? (
							<ChangeUsernameForm
								username={user.name}
								disableEditMode={disableEditMode}
							/>
						) : (
							<UsernameSection
								name={user.name}
								isFetching={isFetching}
								enableEditMode={enableEditMode}
							/>
						)}
					</div>

					<ToggleThemeButton />
				</div>

				<hr className="border-black dark:border-slate-600 mb-4" />

				<button
					onClick={() => {
						const result = confirm("Вы уверены что хотите выйти из аккаунта?");
						if (result) logout();
					}}
					className="text-white font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg w-full">
					Выйти из аккаунта
				</button>
			</div>
		</motion.div>
	);
};

export default User;
