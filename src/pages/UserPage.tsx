import { useThunks } from "@hooks/redux/thunks";
import Input from "@src/components/ui/Input";
import useChangeUserName from "@src/hooks/useChangeUserName";
import { useGetUserQuery } from "@store/user/user.api";

const User = () => {
	const { logout } = useThunks();
	const { data: user, isLoading, isFetching } = useGetUserQuery();
	const {
		register,
		submit,
		editMode,
		errors,
		isSubmitting,
		enableEditMode,
		disableEditMode,
	} = useChangeUserName(user);

	if (isLoading) return <p>Загрузка...</p>;

	if (!user) {
		return <p>Пользователя не существует</p>;
	}

	return (
		<div className="h-full flex items-center">
			<div className="bg-slate-800 p-6 rounded-xl text-white w-full max-w-md mx-auto">
				<h2 className="text-center text-2xl font-bold mb-4">Личный кабинет</h2>

				<div className="mb-4">
					<p className="text-sm text-slate-400">ID:</p>
					<p className="text-lg">{user.id}</p>
				</div>

				<div className="mb-4">
					<p className="text-sm text-slate-400">Email:</p>
					<p className="text-lg">{user.email}</p>
				</div>

				<div className="mb-4">
					<p className="text-sm text-slate-400 mb-1">Имя:</p>
					{editMode ? (
						<form
							onSubmit={submit}
							className="relative flex items-center gap-2 mb-8">
							<Input {...register("name")} type="text" placeholder="Иван" />

							{errors.name && errors.name.message && (
								<p className="absolute bottom-[-25px] left-0 text-[14px] text-red-500">
									{errors.name.message}
								</p>
							)}

							<button
								type="submit"
								disabled={isSubmitting}
								className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded disabled:opacity-50">
								{isSubmitting ? "Сохранение..." : "Сохранить"}
							</button>
							<button
								type="button"
								onClick={disableEditMode}
								className="text-slate-300 hover:text-white">
								Отмена
							</button>
						</form>
					) : (
						<div className="flex items-center justify-between">
							<p className="text-lg">
								{!isFetching ? user.name || "—" : "Загрузка..."}
							</p>
							<button
								onClick={enableEditMode}
								className="text-blue-400 hover:text-blue-500 text-sm">
								Редактировать
							</button>
						</div>
					)}
				</div>

				<hr className="border-slate-600 mb-4" />

				<button
					onClick={() => {
						const result = confirm("Вы уверены что хотите выйти из аккаунта?");
						if (result) logout();
					}}
					className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full">
					Выйти из аккаунта
				</button>
			</div>
		</div>
	);
};

export default User;
