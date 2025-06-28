import { useThunks } from "@src/shared/lib/hooks/redux/thunks";
import { defaultScale } from "@src/shared/animations";
import { useGetUserQuery } from "@src/entities/user/services/user.api";
import { motion } from "framer-motion";
import { ToggleThemeButton } from "@src/features/theme/components/ToggleThemeButton";
import UsernameField from "@src/features/user/ui/UsernameField";
import useConfirmDialog from "@src/shared/lib/hooks/useConfirmDialog";
import ConfirmDialog from "@src/shared/ui/modal/ConfirmDialog";
import ActionButton from "@src/shared/ui/buttons/ActionButton";

const User = () => {
	const { logout } = useThunks();
	const { data: user, isLoading } = useGetUserQuery();
	const { isDialogOpen, openDialog, closeDialog, confirmAction } =
		useConfirmDialog(logout);

	if (isLoading) return <p>Загрузка...</p>;

	if (!user) {
		return <p>Пользователя не существует</p>;
	}

	return (
		<motion.div
			variants={defaultScale}
			animate="animate"
			initial="initial"
			className="h-full flex items-center px-3 py-6">
			<div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-xl w-full max-w-md mx-auto shadow-md @container">
				<h2 className="text-center  font-bold mb-4 @xs:text-2xl">
					Личный кабинет
				</h2>
				<div className="dark:text-slate-400 space-y-4 mb-4">
					<div>
						<h3 className="text-sm">ID:</h3>
						<p className="text-sm @xs:text-lg">{user.id}</p>
					</div>

					<div>
						<h3 className="text-sm">Email:</h3>
						<p className="text-sm @xs:text-lg">{user.email}</p>
					</div>

					<UsernameField />

					<ToggleThemeButton />
				</div>

				<hr className="border-black dark:border-slate-600 mb-4" />

				<ActionButton
					onClick={openDialog}
					className="text-white font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg w-full text-sm @xs:text-base">
					Выйти из аккаунта
				</ActionButton>

				<ConfirmDialog
					title="Выход с аккаунта"
					children="Вы действительно хотите выйти?"
					isOpen={isDialogOpen}
					onClose={closeDialog}
					onConfirm={confirmAction}
				/>
			</div>
		</motion.div>
	);
};

export default User;
