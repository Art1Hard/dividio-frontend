import { type AppDispatch } from "@src/app/store";
import { authActions } from "@src/features/auth/auth.slice";
import { authApi } from "@src/features/auth/api/auth.api";
import resetFullApiState from "@src/lib/utils/resetFullApiState";
import { toast } from "sonner";

export const initAuth = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(authActions.setCheckingAuth(true));

		await dispatch(authApi.endpoints.getAccessToken.initiate()).unwrap();
		console.log("Автологин выполнен успешно");
	} catch (e) {
		console.error("Не удалось выполнить автологин", e);
	} finally {
		dispatch(authActions.setCheckingAuth(false));
	}
};

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		await dispatch(authApi.endpoints.logout.initiate()).unwrap();

		dispatch(authActions.logout());

		resetFullApiState(dispatch);

		toast.success("Вы успешно вышли из системы!");
	} catch (e) {
		console.error("Ошибка при logout-запросе", e);
	}
};
