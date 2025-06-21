import { type AppDispatch } from "@src/store";
import { authActions } from "@src/store/auth/auth.slice";
import { authApi } from "@src/store/auth/auth.api";
import resetFullApiState from "@src/lib/api/resetFullApiState";
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
