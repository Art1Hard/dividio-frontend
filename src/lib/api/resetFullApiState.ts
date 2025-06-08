import type { AppDispatch } from "@src/store";
import { allocationApi } from "@src/store/allocation/allocation.api";
import { authApi } from "@src/store/auth/auth.api";
import { incomeApi } from "@src/store/income/income.api";
import { userApi } from "@src/store/user/user.api";

const resetFullApiState = (dispatch: AppDispatch) => {
	dispatch(authApi.util.resetApiState());
	dispatch(userApi.util.resetApiState());
	dispatch(incomeApi.util.resetApiState());
	dispatch(allocationApi.util.resetApiState());
};

export default resetFullApiState;
